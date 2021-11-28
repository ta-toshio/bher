import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../../../app/firebase'
import { useMutation } from '@apollo/client'
import { CreateStaffWithUidMutation, CreateStaffWithUidMutationVariables, Role } from '../../../generated/graphql'
import { CREATE_STAFF_WITH_UID } from '../../../queries/staff'

export interface IFormInput {
  name: string
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const useRegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  })

  const [createStaffWithUID] = useMutation<
    CreateStaffWithUidMutation,
    CreateStaffWithUidMutationVariables
  >(CREATE_STAFF_WITH_UID)

  const onSubmit: SubmitHandler<IFormInput> = useCallback(async (data) => {
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(async (userCredential) => {
        // firebaseAuth.currentUser.
        const user = userCredential.user
        const token = await user.getIdToken()
        // const data = {
        //   access_token: token,
        //   email: user.email,
        // }
        // console.log(data)

        const createStaff = await createStaffWithUID({
          variables: {
            input: {
              email: data.email,
              name: data.name,
              password: data.password,
              uid: user.uid,
              role: Role.Admin,
            }
          },
          context: {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
        })
        console.log(createStaff)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [createStaffWithUID])

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useRegisterForm
