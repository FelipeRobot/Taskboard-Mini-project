import TaskDisplay from "./Components/TaskDisplay/TaskDisplay"
import AddNew from "./Components/AddNew/AddNew"

const App = ()=>{

  return(
    <div>

      <div className="task-display-holder">
        <TaskDisplay/>
      </div>

      <div className="addNew-holder">
        <AddNew/>
      </div>


    </div>
  )
}

export default App