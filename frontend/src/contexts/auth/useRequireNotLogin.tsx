import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from './useCurrentUser'

export const useRequireNotLogin = (type: "staff" | "user") => {
  const { currentUser, isAuthChecking } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (isAuthChecking) return
    if (currentUser) {
      if (type === "staff") router.push('/staff')
      if (type === "user") router.push('/')
    }
  }, [isAuthChecking, currentUser])
}
