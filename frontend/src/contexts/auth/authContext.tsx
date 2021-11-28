import React, { createContext, useEffect, useState } from 'react'
import { firebaseAuth } from '../../app/firebase'

interface IAuth {
  uid: string
}

type currentUserType = IAuth | null | undefined

interface IAuthContext {
  // undefined -> ログイン未チェック状態
  // null -> 未ログイン
  // User -> ログイン済
  currentUser: currentUserType
}

const AuthContext = createContext<IAuthContext>({
  currentUser: undefined,
})

const AuthProvider = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<currentUserType>(undefined)

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentUser(null)
        return
      }
      setCurrentUser({uid: user.uid})
    })
  }, [])
  console.log(currentUser)

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
