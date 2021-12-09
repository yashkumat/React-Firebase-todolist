import React, {useState} from 'react'
import {addDoc } from 'firebase/firestore'   // Firestore functions to perform CRUD operations
import { todosCollectionRef } from './App'

export default function Form() {

    const [task, setTask] = useState("")

    // Create
    const saveTask = async (e) => {
        e.preventDefault();
        const newTask = {
        isComplete: false,
        createdAt: new Date(),
        task: task
        }
        await addDoc(todosCollectionRef, newTask)   // Add new doc to todos collection
        setTask("");
    }

    return (
            <form className="m-lg-5 m-3">
                <div className="input-group shadow-sm">
                <input className="form-control border border-primary" type="text" name="task" value={task} onChange={e=>setTask(e.target.value)} placeholder="What next?" />
                <button className="btn btn-outline-primary" type="button" onClick={saveTask}>Add</button>
                </div>
            </form>
    )
}
