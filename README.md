
# React-Firebase CRUD Application

ToDo Applications are best to start learning any framework as it cover basic CRUD operations and form handling as well.
## Tech Stack

**Client:** React, Bootstrap

**Server:** Firebase


## Screenshots

![App Screenshot](https://raw.githubusercontent.com/yashkumat/React-Firebase-todolist/main/Screenshot%202021-12-09%20at%2015.49.09.png)


## File Structure

- Form component - Input form and add document logic

- CardContainer component - Read, update, delete document logic

- App component - Layout (Parent component).


## Features

- Component Based (React)
- Realtime (Firebase)
- Reponsive (Bootstrap)


## Lessons Learned

### 1. React

- useState
```javascript
    // useState - Assign initial value to a variable and create a function that can be used to change value of variable
    
    const [tasks, setTasks] = useState([])   
    
    // const tasks = [] , setTasks() is the function which is used to set value of tasks
```

- useEffect
```javascript
    // useEffect - Run code indside it when there is change in second arg.
    useEffect(()=>{
        someCode
    },[dependent variable])    // When dependent variable changes useEffect runs 
```

### 2. Firebase

- Setup

```javascript

import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

// Firebase Configuration
const firebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX",
    appId: "XXXX",
    measurementId: "XXXX"
};

// Connect firebase to our application
const app = initializeApp(firebaseConfig);

// connect to Firestore (firebase nosql db)
export const db = getFirestore(app);

```

![Firestore](https://raw.githubusercontent.com/yashkumat/React-Firebase-todolist/main/Screenshot%202021-12-09%20at%2015.47.51.png)
*Screenshot of Firestore document collection*

- Collection refrence
const collectionRef = collection(db, "collection_name")

- Create

```javascript
import {addDoc } from 'firebase/firestore'

const saveTask = async (e) => {
    await addDoc(todosCollectionRef, newTask)   // Add new doc
}
```

- Read

```javascript
import {getDocs } from 'firebase/firestore'

const getTasks = async (e) => {
    const taskList = await getDocs(todosCollectionRef);   // Get all Docs
}
```

- Update

```javascript
import {updateDoc } from 'firebase/firestore'

const saveTask = async (e) => {
    const task = doc(db, "todos", id);    // find doc 
    await updateDoc(task, {isComplete: true})  // update doc 
}
```

- Delete

```javascript
import {deleteDoc } from 'firebase/firestore'

const deleteTask = async (id) => {
    const task = doc(db, "todos", id)
    await deleteDoc(task)   // Delete doc
}
```
## Feedback

If you have any feedback, please reach out to us at ykumat@gmail.com


