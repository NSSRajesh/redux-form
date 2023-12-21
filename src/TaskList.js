import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./UpdateTask";

import { useSelector,useDispatch } from 'react-redux';
import { setselectedTask,removeTaskList } from "./taskSlice";

const Tasklist=()=>{

  const {taskList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()

    const updateTask=(task)=>{
        console.log("update task")
        setModalShow(true)
        dispatch(setselectedTask(task))
        console.log(task)
    }

    const deleteTask=(task)=>{
        console.log("delete task")
        dispatch(removeTaskList(task))
    }

    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
               <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Task Name</th>
          <th>Task Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          taskList && taskList.map((task,index)=>{
            return(
              <tr key={task.id}>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <Button variant="primary" className="mx-3"
                  onClick={()=>updateTask(task)}
                  >
                  <i class="bi bi-pencil-square"></i></Button>
                  <Button variant="primary"
                  onClick={()=>deleteTask(task
                  
                  )}>
                  <i class="bi bi-trash"></i></Button>
                </td>
            </tr>
            )

            })
        }
        

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      </tbody>
    </Table>
    
        </div>
    )
}

export default Tasklist