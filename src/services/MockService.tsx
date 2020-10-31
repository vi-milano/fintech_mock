import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import { cache } from "../cache";

export const BUSCA_QUERY = gql`
  query MockTest {
    user {
      firstName
    }
  }
`;
export const DASH_ACC_INFO = gql`
  query GetAccountInfo {
    accountBalance
    creditCardBalance
    investmentBalance
    creditAvailable
  }
`;
export const SMALL_STATE = gql`
  query GetSmallStatement {
    entry {
      date
      desc
      value
    }
  }
`;
// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache,
//   uri: "http://mock/graphql",
// });
// export const buscaX = () => {
//   return client.query({
//     query: gql`
//       query MockTest {
//         user {
//           firstName
//         }
//       }
//     `,
//   });
// };
