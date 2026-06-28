import React, { useState } from 'react'

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handelAddTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      text: input,
      complete: false
    }

    const addTodo = [...todo, newTodo];
    setTodo(addTodo)
    setInput("")
  }
  const handelDeleteTodo = (index) => {
    const deleteTodo = todo.filter((_, i) => i != index);
    setTodo(deleteTodo)
  }
  const handelCompleteTodo = (i) => {
    const updateTodo = [...todo];

    updateTodo[i].complete = !updateTodo[i].complete;
    setTodo(updateTodo)
  }

  return (
    <>
      <div>
        <h1>TodoApp</h1>
        <input type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter Todo' />
        <button onClick={handelAddTodo}>Add</button>
      </div>

      <div>
        <ul>
          {
            todo.map((t, i) => (
              <li key={i}>
                <span onClick={() => handelCompleteTodo(i)}>
                  {t.text} {t.complete ? "-complete" : ""}
                </span>
                <button onClick={(e) => handelDeleteTodo(i)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default TodoApp