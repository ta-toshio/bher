import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from './useCurrentUser'
import { staff, user, userType } from './user'

export const useRequireLogin = (type: userType) => {
  const { currentUser, isAuthChecking } = useCurrentUser();
  const router = useRouter()

  useEffect(() => {
    if (isAuthChecking) return;
    if (!currentUser) {
      if (type === staff) router.push('/staffs/login')
      if (type === user) router.push('/users/login')
    }
  }, [isAuthChecking, currentUser]);

  return {
    checking: isAuthChecking
  }
};
