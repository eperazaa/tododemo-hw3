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
        case 'ADD_TODO_ITEM': // TODO: add props for creation date and remove author
          const newToDoItem = { 
              title: action.title,
              description: action.description, 
              dateCreated: new Date(Date.now()).toLocaleDateString(),
              complete: false
            }
            return [ newToDoItem, ...state ]
        case 'TOGGLE_TODO_ITEM':  // TODO: locates a specific todo in your todo list and toggles the complete field and sets the dateCompleted field
          console.log("COMPLETE");
          return state.map((item, i) => i === action.id ? { ...item, complete: !item.complete, dateCompleted: item.complete ? '' : new Date(Date.now()).toLocaleDateString() } : item);   
  
        case 'DELETE_TODO_ITEM': // TODO: removes a specific todo from your todo list
          console.log("DELETE");
          return  state.filter((item, i) => i !== action.id); 
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
