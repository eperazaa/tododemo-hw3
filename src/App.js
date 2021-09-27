import ToDoList from './todos/ToDoList';
import UserBar from './user/UserBar';



function App() {
  const user = 'Eli'
  const items = [
    {
      title: "Task 01",
      description: "Task 01 Description",
      dateCreated: "09/12/2021",
	    complete: true,
	    dateCompleted: "09/12/2021"
    },
    {
      title: "Task 02",
      description: "Task 02 Description",
      dateCreated: "09/12/2021",
	    complete: true,
	    dateCompleted: "09/12/2021"
    },
    {
      title: "Task 03",
      description: "Task 03 Description",
      dateCreated: "09/12/2021",
	    complete: false,
	    dateCompleted: ""
    },
    {
      title: "Task 04",
      description: "Task 04 Description",
      dateCreated: "09/12/2021",
	    complete: false,
	    dateCompleted: ""
    },
    {
      title: "Task 05",
      description: "Task 05 Description vnvbn",
      dateCreated: "09/12/2021",
	    complete: true,
	    dateCompleted: "09/12/2021"
    }
  ]
  return (
    <div>
      <UserBar user={user}/>
      <ToDoList items={items} />
    </div>
  )
}

export default App;
