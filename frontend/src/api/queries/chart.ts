import { gql } from '@apollo/client'

export const chartFragment = gql`
  fragment chartFragment on Chart {
    id
    patch
    generation
    gender
    allergy
    rash
    sting
    dye_when
    dye_where
    hena_when
    rebonded_when
    perm_when
    treatment_when
    notice_reason
    last_name
    first_name
    last_name_hiragana
    first_name_hiragana
    postal_code
    prefecture_id
    address
    tel
    email
    create_time
    update_time
  }
`

export const CREATE_CHART = gql`
  mutation CreateChart($input: CreateChartInput!) {
    createChart(input: $input) {
      ...chartFragment
    }
  }
  ${chartFragment}
`
