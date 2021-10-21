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
            id: action.id, 
            title: action.title,
            description: action.description, 
            dateCreated: action.dateCreated,
            complete: action.complete,
            dateCompleted: action.dateCompleted
          }
          return [ newToDoItem, ...state ]
        case 'TOGGLE_TODO_ITEM':  // TODO: locates a specific todo in your todo list and toggles the complete field and sets the dateCompleted field
          console.log("COMPLETE");
          return state.map((item, i) => i === action.id ? { ...item, complete: action.complete, dateCompleted: action.dateCompleted } : item);   
  
        case 'DELETE_TODO_ITEM': // TODO: removes a specific todo from your todo list
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
