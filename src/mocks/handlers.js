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
        creditCardBalance: "30000",
        investmentBalance: "103200",
        creditAvailable: "80000",
      })
    );
  }),
];
