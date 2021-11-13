import React from 'react'
import useSearch from './useSearch'

const List: React.FC = () => {
  const { searchTodos, todos } = useSearch()
  console.log("data", todos)

  return (
    <div>
      <div>
        <button onClick={searchTodos}>search</button>
      </div>
      <div>
        <ul>
          {todos && todos.map(todo => (
            <li key={`todo-node-${todo?.node?.id}`}>{todo?.node?.text}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default List
