import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../../../app/firebase'
import { useMutation } from '@apollo/client'
import { CREATE_STAFF_WITH_UID } from '../../../api/queries'
import {
  CreateStaffWithUidMutation,
  CreateStaffWithUidMutationVariables,
  Role, StaffQuery,
} from '../../../api/generated/graphql'
import { useRouter } from 'next/router'

export interface IFormInput {
  name: string
  email: string
  password: string
  role: string
}

export const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
})

type Props = {
  initialValues?: IFormInput
}

const defaultValues = {
  name: '',
  email: '',
  password: '',
  role: Role.Staff,
}

export const staffToFormData = (data: StaffQuery["staff"]) => {
  if (!data) return {}
  return {
    name: data.name,
    email: data.email,
    role: data.role,
  }
}

const useStaffAdd = ({ initialValues = defaultValues }: Props) => {
  const router = useRouter()
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
        const user = userCredential.user
        const token = await user.getIdToken()

        await createStaffWithUID({
          variables: {
            input: {
              email: data.email,
              name: data.name,
              password: data.password,
              uid: user.uid,
              role: data.role as Role,
            }
          },
          context: {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
        })

        router.replace('/admin/staffs')
      })
      .catch((error) => console.log(error))

  }, [createStaffWithUID])

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useStaffAdd
