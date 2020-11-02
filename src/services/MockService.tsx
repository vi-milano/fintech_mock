import { gql } from "@apollo/client";

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
      extrato
    }
  }
`;
