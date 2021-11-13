import { useMutation } from '@apollo/client'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { CREATE_TODO } from '../../../queries/todo'
import { CreateTodoMutation, CreateTodoMutationVariables, Status } from '../../../generated/graphql'

interface IFormInput {
  text: string
  status: Status.Completed | Status.InProgress
  priority: number
  parentID: string
}

const schema = yup.object({
  text: yup.string().required(),
  status: yup.string().required(),
  priority: yup.number().positive().integer().required(),
}).required()

const useMyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })

  const [createTodo] = useMutation<CreateTodoMutation,
    CreateTodoMutationVariables>(CREATE_TODO)

  const onSubmit: SubmitHandler<IFormInput> = useCallback(async (data) => {
    const res = await createTodo({
      variables: {
        input: {
          text: data.text,
          status: data.status,
          priority: data.priority,
          ...(data.parentID ? { parentID: data.parentID } : {}),
        },
      },
    })
    alert(res.data?.createTodo.id)
  }, [createTodo])


  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }

}

export default useMyForm
