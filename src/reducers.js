function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token,
                '_id': action._id
            }
        case 'LOGOUT':
          return {
                'username': undefined,
                'access_token': undefined,
                '_id': undefined
           }
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
          createdOn: action.createdOn,
          completed: false,
          completedOn: undefined,
          author: action.author
        }
        const filterTodo = state.filter((t) => t.id === action.id);
        if (filterTodo.length === 0) {
          return [ newToDoItem, ...state ]
        }
        return state;


      case 'TOGGLE_TODO_ITEM':  
        return state.map((todo) => { 
            console.log(todo._id + "," + action._id)
            if(todo._id === action._id ) 
              return { ...todo, completed: action.completed, completedOn: action.completedOn } 
            else 
              return todo
            }   
            
          )

      case 'DELETE_TODO_ITEM': 
        console.log("DELETE");
        return  state.filter((todo) => todo._id !== action._id); 
      case 'FETCH_TODO_ITEMS':
        return action.todos;
      default:
          return state;
    }
  }

  function usersReducer (state, action) {
    switch (action.type) {
        
        case 'FETCH_USERS':
          return action.users;
        default:
            return state;
      }
    }

  /* function todoListReducer (state, action) {
    switch (action.type) {
        case 'ADD_TODO_LIST': 
          const newToDoList = {
            id: action.id, 
            title: action.title,
            description: action.description, 
            dateCreated: action.dateCreated,
            owner: action.username
          }
          const filterTodo = state.filter((t) => t.id === action.id);
          if (filterTodo.length === 0) {
            return [ newToDoList, ...state ]
          }
          return state;
  
  
         
        case 'DELETE_TODO_LIST': 
          console.log("DELETE LIST");
          return  state.filter((list) => list.id !== action.id); 
        case 'FETCH_TODO_ITEMS':
          return action.lists;
        default:
            return state;
      }
    } */

  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoItemReducer(state.todos, action), 
        users: usersReducer(state.users, action)      // lists: todoListReducer (state, action)
    }
  }
