import { gql } from '@apollo/client'
import { pageInfoFragment } from './app'

export const staffFragment = gql`
  fragment staffFragment on Staff {
    id
    uid
    name
    email
    role
  }
`

export const CREATE_STAFF_WITH_UID = gql`
  mutation CreateStaffWithUID($input: CreateStaffWithUIDInput!) {
    createStaffWithUID(input: $input) {
      ...staffFragment
    }
  }
  ${staffFragment}
`

export const STAFFS = gql`
  query Staffs(
    $after: Cursor,
    $first: Int,
    $before: Cursor,
    $last: Int,
    $orderBy: StaffOrder,
    $where: StaffWhereInput
  ) {
    staffs(
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
          ...staffFragment
        }
        cursor
      }
      pageInfo {
        ...pageInfoFragment
      }
    }
  }
  ${staffFragment}
  ${pageInfoFragment}
`

export const STAFF = gql`
  query Staff($id: ID!) {
    staff(id: $id) {
      ...staffFragment
    }
  }
  ${staffFragment}
`

export const UPDATE_STAFF = gql`
  mutation UpdateStaff($id: ID! $input: UpdateStaffInput!) {
    updateStaff(id: $id, input: $input) {
      ...staffFragment
    }
  }
  ${staffFragment}
`

