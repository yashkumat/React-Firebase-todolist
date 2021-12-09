// React imports
import React, {useState, useEffect} from 'react';

// firebase imports
import {db} from './firebase'
import {getDocs, collection} from 'firebase/firestore'   // Firestore functions to perform CRUD operations

// Components
import CardContainer from './CardContainer'
import Form from './Form'
import './App.css';

// "todos" collection refrence
const todosCollectionRef = collection(db, "todos")

function App() {
  // useState - Assign initial value to a variable and creating function that set its value when required
  const [tasks, setTasks] = useState([])   // const tasks = [] , setTasks() is the function which set value of tasks

  // useEffect - Run code indside it when there is change in second arg.
  useEffect(()=>{
    // Read
    const getTasks = async () => {
      const taskList = await getDocs(todosCollectionRef);
      setTasks(taskList.docs.map(task=>({...task.data(), id:task.id})))
    }
    getTasks();
  },[tasks])    // When tasks changes useEffect runs 

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Form />    
        </div>
      </div>
      <div className="row">
        <CardContainer tasks={tasks} complete={true} />
      </div>
      <div className="row mt-3">
        <CardContainer tasks={tasks} complete={false} />
      </div>
    </div>

  );
}

export default App;
export {todosCollectionRef}