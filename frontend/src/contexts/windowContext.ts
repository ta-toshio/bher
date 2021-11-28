import { firebaseAuth } from '../app/firebase'

export const getFirebaseUser = () => {
  return firebaseAuth.currentUser
}

export const getIdToken = async (): Promise<string|undefined> => {
  const token = await firebaseAuth.currentUser?.getIdToken()
  return token
}

