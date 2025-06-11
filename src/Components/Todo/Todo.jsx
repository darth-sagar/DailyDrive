import React, {useState, useEffect} from 'react'
import './Todo.css'
import {motion} from 'framer-motion';
import Todolist from '../Todolist/Todolist';
import {v4 as uuid} from 'uuid'

const Todo = () => {
    const [todo, setTodo]=useState('');
    const [todoList , setTodoList]=useState([]);

    const updateTodoStatus = (todoId, isCompleted) => {
        const updatedTodoList = todoList.map(item => {
            if (item._id === todoId) {
                return { ...item, isCompleted };
            }
            return item;
        });
        setTodoList(updatedTodoList);
        localStorage.setItem("todo", JSON.stringify(updatedTodoList));
    };

    const deleteTodo = (todoId) => {
        const updatedTodoList = todoList.filter(item => item._id !== todoId);
        setTodoList(updatedTodoList);
        localStorage.setItem("todo", JSON.stringify(updatedTodoList));
    };

    useEffect(() => {
        const storedTodos = localStorage.getItem("todo");
        if (storedTodos) {
            setTodoList(JSON.parse(storedTodos));
        }
    }, []);

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
        <div className={"tod_div"}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5,ease:"easeInOut"}}
            >
                <h1 className={"heading"}></h1>
                <form onSubmit={ (e)=>{e.preventDefault()}}>
                    <input 
                        className={"input"} 
                        placeholder="Add Task's" 
                        onKeyPress={handleSubmit} 
                        onChange={handleChanges} 
                        value={todo}
                        type="text"
                    />
                </form>
            </motion.div>
            {todoList && todoList.map(({todo, isCompleted,_id })=>{
                return(
                    <Todolist 
                        key={_id} 
                        todo={todo} 
                        isCompleted={isCompleted} 
                        _id={_id}
                        updateTodoStatus={updateTodoStatus}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </div>
    )
}
export default Todo
