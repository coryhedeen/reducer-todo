import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducers';

const ListForm = () => {

  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(reducer, initialState)

const changeHandler = e => {
  setNewTodo(e.target.value)
}

  return (
      <form>
        {state.item}
        <input
          type="text"
          name="todo"
          placeholder="task"
          value={newTodo}
          onChange={changeHandler}
        />
        <button onClick={() => dispatch({type: 'ADD_TODO', payload: newTodo})} >add</button>
      </form>
  );
}

export default ListForm;
