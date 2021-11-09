import React, {useContext, useEffect}  from 'react'
import { StateContext } from '../Contexts'

import { useResource } from 'react-request-hook'

export default function ToDoItem ({item}) {

  
    const {dispatch} = useContext(StateContext)

    const [todoitem, deleteToDoItem ] = useResource((i) => ({
        url: `/todos/${i}`,  
        method: 'delete'
    }))


    function handleDeleteToDoItem (i) {
        deleteToDoItem(i);
        //dispatch({type: "DELETE_TODO_ITEM", id: item.id}); 
                
    }
    useEffect(() => {
        if (todoitem && todoitem.data  && !todoitem.isLoading) { //TODO ADD LOADING THING
            dispatch({type: "DELETE_TODO_ITEM", id: item.id});
        }
   }, [todoitem])

    
   
   
   
   
   const [todoitem2, completeToDoItem ] = useResource((i, c) => ({
        url: `/todos/${i}`,  
        method: 'PATCH',
        data: {
            complete: !c,
            dateCompleted: !c ? new Date(Date.now()).toLocaleDateString() : null

        }
    }))


    function handleCompleteToDoItem (i,c) {
        completeToDoItem(i, c);
    }
      

    

    useEffect(() => {
           if (todoitem2 && todoitem2.data && !todoitem2.isLoading) {
                dispatch({type: "TOGGLE_TODO_ITEM", id: todoitem2.data.id, complete: todoitem2.data.complete, dateCompleted: todoitem2.data.dateCompleted});
           }
      }, [todoitem2])



      
  return (
     <div>
          <input type="checkbox"  name="complete"  checked={item.complete} onChange={e => { handleCompleteToDoItem(item.id, item.complete);} }/>  <b>{item.title}</b><br/>
          Description: {item.description}<br/>
          Creation Date: {item.dateCreated}<br/>
          Completion date: {item.dateCompleted ? item.dateCompleted : ""} <br/>
          <button onClick={e => {handleDeleteToDoItem(item.id);}} name="delete">Remove</button>
     </div> 
 )
}
