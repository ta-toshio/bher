import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from './useCurrentUser'

export const useRequireLogin = (type: "staff" | "user") => {
  const { currentUser, isAuthChecking } = useCurrentUser();
  const router = useRouter()

  useEffect(() => {
    if (isAuthChecking) return;
    if (!currentUser) {
      if (type === "staff") router.push('/staff/login')
      if (type === "user") router.push('/user/login')
    }
  }, [isAuthChecking, currentUser]);
};
