import { useContext } from 'react'
import { AuthContext } from './authContext'

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext)
  const isAuthChecking = currentUser === undefined

  return {
    currentUser,
    isAuthChecking,
  }
}
