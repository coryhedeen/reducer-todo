export const initialState = {
  item: 'create todo list',
  completed: false,
  id: 1938470
}

export const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
    return {
      ...state,
      item: action.payload,
      id: Date.now(),
      completed: false
    }
    default:
    return state
  }
}
