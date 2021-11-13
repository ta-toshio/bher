import { gql } from '@apollo/client'
import { pageInfoFragment } from './app'

export const todoFragment = gql`
  fragment todoFragment on Todo {
    id
    createdAt
    status
    priority
    text
  }
`

export const TODOS = gql`
  query Todos(
    $after: Cursor,
    $first: Int,
    $before: Cursor,
    $last: Int,
    $orderBy: TodoOrder,
    $where: TodoWhereInput
  ) {
    todos(
      after: $after,
      first: $first,
      before: $before,
      last: $last,
      orderBy: $orderBy,
      where: $where
    ) {
      totalCount
      edges {
        node {
          ...todoFragment
          parent {
            ...todoFragment
          }
          children {
            ...todoFragment
          }
        }
        cursor
      }
      pageInfo {
        ...pageInfoFragment
      }
    }
  }
  ${todoFragment}
  ${pageInfoFragment}
`
