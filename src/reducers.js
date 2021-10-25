function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

  function todoItemReducer (state, action) {
    switch (action.type) {
        case 'ADD_TODO_ITEM': 
          const newToDoItem = {
            id: action.id, 
            title: action.title,
            description: action.description, 
            dateCreated: action.dateCreated,
            complete: action.complete,
            dateCompleted: action.dateCompleted
          }
          const filterTodo = state.filter((t) => t.id === action.id);
          if (filterTodo.length === 0) {
            return [ newToDoItem, ...state ]
          }
          return state;


        case 'TOGGLE_TODO_ITEM':  
          console.log("COMPLETE");
          return state.map((item, i) => i === action.id ? { ...item, complete: action.complete, dateCompleted: action.dateCompleted } : item);   
  
        case 'DELETE_TODO_ITEM': 
          console.log("DELETE");
          return  state.filter((item, i) => i !== action.id); 
        case 'FETCH_TODO_ITEMS':
          return action.items;
        default:
           return state;
    }
  }

  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        items: todoItemReducer(state.items, action)
    }
}
