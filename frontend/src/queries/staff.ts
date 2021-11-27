import { gql } from '@apollo/client'
import { chartFragment } from './chart'

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
