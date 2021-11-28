import { gql } from '@apollo/client'

export const pageInfoFragment = gql`
  fragment pageInfoFragment on PageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
`
