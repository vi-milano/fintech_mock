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
export const FULL_STATE = gql`
  query GetFullStatement($filter: String!) {
    entry(filter: $filter) {
      date
      desc
      flag
      categoria
      value
    }
  }
`;
export const CARD_INFO = gql`
  query GetCardInfo {
    cards {
      dataVencimento
      final
      label
      limite
      saldo
      titular
      banco
    }
  }
`;

export const TEST = gql`
  query GetCardInfo($label: String!) {
    cards(label: $label) {
      dataVencimento
      final
      label
      limite
      saldo
      titular
      banco
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
