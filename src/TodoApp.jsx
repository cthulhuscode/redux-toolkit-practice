import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data, isLoading } = useGetTodosQuery();  
  const { data: todo } = useGetTodoQuery(todoId);

  return (
    <div>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>{isLoading && "Loading..."}</h4>
      
      <pre>...</pre>
      <ul>
        { data && data.todos.map(({id, todo: title}) => (<li key={id}>- {title}</li>)) }
      </ul>

      <br />
      <br />
      <h3>Get one todo</h3>
      <p>{todo?.todo}</p>

      <button onClick={() => { todoId > 1 && setTodoId(todoId - 1) }}>Prev Todo</button>
      <button onClick={() => { setTodoId(todoId + 1)}}>Next Todo</button>
    </div>
  )
}
