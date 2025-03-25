
import { useState } from "react"

const AddNew = () => {
    const [taskName, setTaskName] = useState("");
    const [taskStatus, setTaskStatus] = useState("");

    const addTask=()=>{



    }



    return (
        <div className="addNew-holder">

            <h1>Add a new Task!</h1>

            <form
                
            >
                <label>New task name:</label>
                <input
                    type="text"
                    value={taskName}
                    onChange={(input) => setTaskName(input.target.value)}
                />

                <div className="status-btn-holder">
                    <button>
                        To-Do
                    </button>

                    <button>
                        Doing
                    </button>

                    <button>Completed</button>

                </div>

                <button type="Submit">Add new Task</button>
            </form>




        </div>

    )

}

export default AddNew