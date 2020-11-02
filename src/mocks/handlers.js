// src/mocks/handlers.js
import { graphql } from "msw";

export const handlers = [
  graphql.query("MockTest", (req, res, ctx) => {
    const authenticatedUser = "Usuario";

    if (!authenticatedUser) {
      return res(
        ctx.errors([
          {
            message: "Não autenticado",
            errorType: "AuthenticationError",
          },
        ])
      );
    }

    return res(
      ctx.data({
        user: {
          username: authenticatedUser,
          firstName: "Vitor",
        },
      })
    );
  }),
  graphql.query("GetAccountInfo", (req, res, ctx) => {
    return res(
      ctx.data({
        accountBalance: "-13000",
        creditCardBalance: "30000,12",
        investmentBalance: "103200",
        creditAvailable: "80000",
      })
    );
  }),
  graphql.query("GetSmallStatement", (req, res, ctx) => {
    return res(
      ctx.data({
        entry: [
          {
            date: "10/04/2020",
            desc: "McDonalds Paulista",
            value: "-46,23",
          },
          {
            date: "14/04/2020",
            desc: "Pagamento de fornecedor",
            value: "-324,90",
          },
          {
            date: "19/05/2020",
            desc: "Depósito de cliente",
            value: "5200,13",
          },
          {
            date: "20/05/2020",
            desc: "Rendimento de aplicação",
            value: "500,95",
          },
        ],
      })
    );
  }),
  graphql.query("GetCardInfo", (req, res, ctx) => {
    const { label } = req.variables;
    const data = [
      {
        dataVencimento: "10/04",
        final: "1034",
        label: "VISA",
        limite: "4000",
        saldo: "2400",
        titular: "Vitor Milano",
        banco: "NuBank",
        extrato: [
          {
            title: "Netflix",
            label: "outros",
            date: "10/03/2020",
            price: "R$20.102,03",
          },
          {
            title: "McDonald's",
            label: "alimentação",
            date: "10/03/2020",
            price: "R$3.102,33",
          },
          {
            title: "Posto de Gasolina",
            label: "transporte",
            date: "10/03/2020",
            price: "R$2.102,42",
          },
          {
            title: "Impressora plotter",
            label: "escritório",
            date: "10/03/2020",
            price: "R$27.321,13",
          },
          {
            title: "Extra Supermercado",
            label: "alimentação",
            date: "10/03/2020",
            price: "R$20.102,03",
          },
          {
            title: "Oficina mecânica",
            label: "transporte",
            date: "10/03/2020",
            price: "R$3.102,33",
          },
          {
            title: "Kalunga Papelaria",
            label: "escritório",
            date: "10/03/2020",
            price: "R$2.102,42",
          },
          {
            title: "Restaurante Prato Sete",
            label: "alimentação",
            date: "10/03/2020",
            price: "R$27.321,13",
          },
        ],
      },
      {
        dataVencimento: "23/05",
        final: "4487",
        label: "ELO",
        limite: "6000",
        saldo: "4600",
        titular: "Elisa Silva",
        banco: "Santander",
        extrato: [
          {
            title: "Burger King",
            label: "alimentação",
            date: "10/03/2020",
            price: "R$3.102,33",
          },
          {
            title: "Posto Shell",
            label: "transporte",
            date: "10/03/2020",
            price: "R$2.102,42",
          },
          {
            title: "Apple Store",
            label: "outros",
            date: "10/03/2020",
            price: "R$27.321,13",
          },
          {
            title: "Carrefour Hipermercado",
            label: "alimentação",
            date: "10/03/2020",
            price: "R$20.102,03",
          },
          {
            title: "Papelaria São João",
            label: "escritório",
            date: "10/03/2020",
            price: "R$2.102,42",
          },
        ],
      },
    ];
    let response = data;
    if (label) {
      response = data.filter((d) => d.label === label);
    }
    return res(
      ctx.data({
        cards: response,
      })
    );
  }),
  graphql.query("GetFullStatement", (req, res, ctx) => {
    const { filter } = req.variables;

    const entryList = [
      {
        date: "10/04/2020",
        desc: "McDonalds Paulista",
        flag: "debito",
        categoria: "alimentação",
        value: "-46,23",
      },
      {
        date: "14/05/2020",
        desc: "Depósito de cliente",
        flag: "transferencia",
        categoria: null,
        value: "5200,13",
      },
      {
        date: "19/04/2020",
        desc: "Pagamento de fornecedor",
        flag: "boleto",
        categoria: "material",
        value: "-324,90",
      },
      {
        date: "20/05/2020",
        desc: "Rendimento de aplicação",
        flag: "rendimento",
        categoria: null,
        value: "500,95",
      },
      {
        date: "22/05/2020",
        desc: "Aporte de investimento",
        flag: "transferencia",
        categoria: null,
        value: "10000,95",
      },
      {
        date: "24/04/2020",
        desc: "IPTU",
        flag: "boleto",
        categoria: "impostos",
        value: "-420,00",
      },
      {
        date: "27/04/2020",
        desc: "Material de escritório",
        flag: "debito",
        categoria: "escritório",
        value: "-324,90",
      },
      {
        date: "28/04/2020",
        desc: "Salário de funcionário",
        flag: "transferencia",
        categoria: "salario",
        value: "-5000,00",
      },
      {
        date: "30/04/2020",
        desc: "Pagamento de aluguel",
        flag: "transferencia",
        categoria: "escritório",
        value: "-7000,00",
      },
    ];

    let data = [];

    switch (filter) {
      case "creditos":
        data = entryList.filter((d) => {
          let formatedNumber = d.value.replace(",", ".");
          return Number(formatedNumber) >= 0;
        });
        break;
      case "debitos":
        data = entryList.filter((d) => {
          let formatedNumber = d.value.replace(",", ".");
          return Number(formatedNumber) < 0;
        });
        break;
      case "boletos":
        data = entryList.filter((d) => d.flag === "boleto");
        break;
      case "cartões":
        data = entryList.filter((d) => d.flag === "debito");
        break;
      case "transferências":
        data = entryList.filter((d) => d.flag === "transferencia");
        break;
      case "rendimentos":
        data = entryList.filter((d) => d.flag === "rendimento");
        break;
      default:
        data = entryList;
    }

    return res(
      ctx.data({
        entry: data,
      })
    );
  }),
];
