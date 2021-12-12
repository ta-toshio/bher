import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { UPDATE_STAFF } from '../../../api/queries'
import {
  Role, StaffQuery, UpdateStaffMutation, UpdateStaffMutationVariables,
} from '../../../api/generated/graphql'

export interface IFormInput {
  id: string
  name: string
  role: string
}

export const schema = yup.object({
  name: yup.string().required(),
  role: yup.string().required(),
})

type Props = {
  initialValues?: IFormInput
}

export const staffToFormData = (data: StaffQuery["staff"]) => {
  if (!data) return undefined
  return {
    id: data.id,
    name: data.name,
    role: data.role,
  }
}

const useStaffEdit = ({ initialValues }: Props) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  })

  const [updateStaff] = useMutation<
    UpdateStaffMutation,
    UpdateStaffMutationVariables
    >(UPDATE_STAFF)


  const onSubmit: SubmitHandler<IFormInput> = useCallback(async (data) => {
    try {
      await updateStaff({
        variables: {
          id: data.id,
          input: {
            name: data.name,
            role: data.role as Role,
          }
        }
      })

      router.push("/admin/staffs")
    } catch (e) {
      console.log(e)
    }

  }, [router, updateStaff])

  useEffect(() => {
    if (initialValues) {
      reset(initialValues)
    }
  }, [initialValues])

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useStaffEdit
