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
          firstName: "Mario",
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
    return res(
      ctx.data({
        cards: [
          {
            dataVencimento: "10/04",
            final: "1034",
            label: "VISA",
            limite: "4000",
            saldo: "2400",
            titular: "Vitor Milano",
            banco: "NuBank",
          },
          {
            dataVencimento: "23/05",
            final: "4487",
            label: "ELO",
            limite: "6000",
            saldo: "4600",
            titular: "Elisa Silva",
            banco: "Santander",
          },
        ],
      })
    );
  }),
];
