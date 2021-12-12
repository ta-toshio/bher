import { useLazyQuery, useQuery } from '@apollo/client'
import { StaffQuery, StaffQueryVariables } from '../../../api/generated/graphql'
import { useEffect } from 'react'
import { STAFF } from '../../../api/queries'
import { useCurrentUser } from '../../../contexts/auth/useCurrentUser'


const useStaffList = ({ staffId }) => {
  const { hasAuth } = useCurrentUser()
  const [fetch, { data, loading, called, error }] = useLazyQuery<
    StaffQuery,
    StaffQueryVariables
    >(STAFF, {fetchPolicy: 'cache-and-network'})

  useEffect(() => {
    if (hasAuth && staffId) {
      fetch({
        variables: {id: `${staffId}`}
      })
    }
  }, [hasAuth, staffId])


  return {
    data: data && data.staff,
    loading,
    called,
    error,
  }
}

export default useStaffList
