import React from 'react'
import {doc, deleteDoc, updateDoc} from 'firebase/firestore'   // Firestore functions to perform CRUD operations
import {db} from './firebase'

export default function CardContainer({tasks, complete}) {

    // Update
    const markComplete = async (id) => {
        const task = doc(db, "todos", id);    // find doc with id=id in todos collection
        await updateDoc(task, {isComplete: true})   // Update status of isCompleted in found doc
    }

    // Delete
    const deleteTask = async (id) => {
        const task = doc(db, "todos", id)
        await deleteDoc(task)   // Delete doc 
    }

    return (
        <div className="row">
            <div className="col-12">
                <h5 className={"text-" + (complete ? "danger" : "success")} >{ complete ?  "Pending" : "Complete" }</h5>
            </div>

            {
                tasks.filter(value=>{return value.isComplete === !complete}).map((task)=>{ 
                return (
                    <div className="col-sm-6 col-md-4 col-lg-3 p-lg-2 p-2 d-flex" key={task.id}>
                    <div className={"card flex-fill card-" + (complete ? "danger" : "success")}>
                        <div className="card-body">
                            <h5 className="card-title">{task.task}</h5>
                            <div className="action-buttons">
                                {complete && <button className="btn btn-sm card-link btn-link text-success" onClick={()=>markComplete(task.id)}>Complete</button>}
                                <button className="btn btn-sm card-link btn-link text-danger" onClick={()=>deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    </div>
                )
                })
            }
        </div>
    )
}
