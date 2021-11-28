import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../../../app/firebase'

export interface IFormInput {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const initialValues = {
  email: '',
  password: '',
}

const useRegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  })

  const onSubmit: SubmitHandler<IFormInput> = useCallback(async (data) => {
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user
        const token = await user.getIdToken()
        console.log(user, token)

      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useRegisterForm
