import React, {useState} from 'react'
import './Todolist.css'
import { MdDeleteOutline } from "react-icons/md";
import {motion} from 'framer-motion';

const Todolist = ({todo, isCompleted, _id, updateTodoStatus, deleteTodo}) => {

    const [isStrike, setIsStrike]=useState(isCompleted)

    const HandleStrike=(todoId)=>{
        const newIsStrike = !isStrike
        setIsStrike(newIsStrike)
        updateTodoStatus(todoId, newIsStrike)
    }

    const handleDelete=(ToDoId)=>{
        deleteTodo(ToDoId)
    }
    return (
        <motion.div key={_id} className={"todolist_div"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5,ease:"easeInOut"}}
        >
            <label className={`${isStrike?"strikethrough":""} input_text`}>
                <input 
                    type={"checkbox"} 
                    className={"checkbox_input"} 
                    checked={isStrike}
                    onChange={()=>HandleStrike(_id)}
                />
                {todo}
            </label>
            <button onClick={()=>handleDelete(_id)} id={_id} className={"delete_button"}><MdDeleteOutline /></button>
        </motion.div>
    )
}
export default Todolist
