import { useContext } from 'react'
import { AuthContext } from './authContext'

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext)
  const isAuthChecking = currentUser === undefined
  const hasAuth = !!(currentUser && currentUser.uid)

  return {
    currentUser,
    isAuthChecking,
    hasAuth,
  }
}
