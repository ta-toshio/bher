import { useLazyQuery } from '@apollo/client'
import { TODOS } from '../../../api/queries'
import { useCallback, useEffect, useState } from 'react'
import { TodosQuery, TodosQueryVariables } from '../../../api/generated/graphql'

const LIMIT = 2

const useSearch = () => {

  const [after, setAfter] = useState<string>("");
  const [fetchTodos, {called, loading, data}] = useLazyQuery<
    TodosQuery,
    TodosQueryVariables
  >(TODOS)

  const searchTodos = useCallback(() => {
    const call = async () => {
      fetchTodos({
        variables: {
          first: LIMIT,
          ...(after ? { after } : {}),
        }
      })
    }

    call()
      .catch(e => console.log(e))
  }, [fetchTodos, after])

  useEffect(() => {
    if (data) {
      setAfter(data.todos?.pageInfo.endCursor)
    }
  }, [data])

  return {
    searchTodos,
    called,
    loading,
    todos: data && data.todos && data.todos.edges,
    pageInfo: data && data.todos && data.todos.pageInfo,
  }
}

export default useSearch

