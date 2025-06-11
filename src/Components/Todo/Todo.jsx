import React, {useState} from 'react'
import './Todo.css'
import {motion} from 'framer-motion';
import Todolist from '../Todolist/Todolist';
import {v4 as uuid} from 'uuid'
const Todo = () => {

    const [todo, setTodo]=useState('')
    const [todoList , setTodoList]=useState([])

    const handleChanges=(event)=>{
        setTodo(event.target.value)
    }
    const handleSubmit=(event)=>{
        if(event.key==="Enter"){
            const updatedTodoList= [...todoList,{_id:uuid(),todo,isCompleted:false}]
            setTodoList(updatedTodoList)
            setTodo('')
            localStorage.setItem("todo", JSON.stringify(updatedTodoList))
            event.preventDefault();
            event.target.value="";
        }
    }

    return (
        <div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5,ease:"easeInOut"}}
            >
                <h1 className={"heading"}></h1>
                <form onSubmit={ (e)=>{e.preventDefault()}}>
                    <input className={"input"} placeholder="Add to-do" onKeyPress={handleSubmit} onChange={handleChanges} type="text"/>
                </form>
            </motion.div>
            {/*<Todolist />*/}
        </div>
    )
}
export default Todo
