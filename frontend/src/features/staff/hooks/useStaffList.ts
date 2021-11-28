import { useLazyQuery } from '@apollo/client'
import { StaffsQuery, StaffsQueryVariables } from '../../../api/generated/graphql'
import { useCallback, useEffect, useState } from 'react'
import { PAGE_LIMIT, STAFFS } from '../../../api/queries'
import { useCurrentUser } from '../../../contexts/auth/useCurrentUser'


const useStaffList = () => {
  const { hasAuth } = useCurrentUser()
  const [fetch, { data, loading, called, error }] = useLazyQuery<
    StaffsQuery,
    StaffsQueryVariables
    >(STAFFS, {fetchPolicy: 'cache-and-network'})
  const [afterCursor, setAfterCursor] = useState<string | null>(null)

  const search = useCallback(() => {
    const variables = {
      first: PAGE_LIMIT,
      ...(afterCursor ? { after: afterCursor } : {}),
    }
    fetch({ variables })

  }, [fetch, afterCursor])

  useEffect(() => {
    if (hasAuth) search()
  }, [hasAuth])

  useEffect(() => {
    if (data) {
      setAfterCursor(data.staffs?.pageInfo.endCursor)
    }
  }, [data])

  return {
    data: data && data.staffs && data.staffs.edges,
    loading,
    called,
    error,
    search,
  }
}

export default useStaffList
