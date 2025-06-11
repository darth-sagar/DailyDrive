import './Task.css'
import {useBrowser} from '../../context/browser_context';
import React, {useState} from 'react'
import {useEffect} from 'react';
import {quotes} from '../../db/quotes';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import todo from '../../Components/Todo/Todo';
import Todo from '../../Components/Todo/Todo';
import {click} from '@testing-library/user-event/dist/click';
import { MdDeleteOutline } from "react-icons/md";

const index = quotes[Math.floor(Math.random() * quotes.length)];
const quote = index.quote;

const Task = () => {

    const [istodoopen, setistodoopen]=useState(false)
    const [ischeck, setischeck] = useState(false)
    const {time,message,task,name, BrowserDispatch} = useBrowser();

    useEffect(()=>{
        const task=localStorage.getItem("task");
        BrowserDispatch({
            type:"TASK",
            payload:task
        })
    },[])

    useEffect(()=>{
        const ischeck=localStorage.getItem("Check_status");
        setischeck(ischeck === "true")
    },[])

    useEffect(() => {
        getCurrentTime();
    }, [time])

    const getCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        const currentTimeIs = `${hours}:${minutes}`;
        setTimeout(getCurrentTime, 1000);
        BrowserDispatch({
            type: "TIME",
            payload: currentTimeIs
        })
        BrowserDispatch({
            type: "MESSAGE",
            payload: hours
        })
    }
    const handleTaskChange=(event)=>{
        if(event.key==="Enter") {
            BrowserDispatch({
                type: "TASK",
                payload: event.target.value
            })
            localStorage.setItem("task", event.target.value);
            localStorage.setItem("date", new Date().getDate());
        }
    }
    const handleTask=(event)=>{
        const newCheckState = !ischeck;
        setischeck(newCheckState);
        localStorage.setItem("Check_status", String(newCheckState));
    }

    const removebutton=()=>{
        BrowserDispatch({
            type:"TASK",
            payload:""
        })
        localStorage.setItem("task", "");
        setischeck(ischeck=>false);
    }

    const handletodokey=()=>{
        setistodoopen(prev => !prev)
    }
    return (
        <div className={"main_div"}>
            <motion.h1 className="time"
                       initial={{ opacity: 0,x:-50 }}
                       animate={{ opacity: 1,x:0}}
                       transition={{ duration: 2 }}

            >{time}</motion.h1>
            <motion.h1 className="task"
                       initial={{ opacity: 0 , x:-50}}
                       animate={{ opacity: 1,  x:0}}
                       transition={{ duration: 2, delay:2 }}

            >{message}, {`${name}`}</motion.h1>
            <div className="links">
                <motion.a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1  }}
                          transition={{ duration: 0.5, delay:4 }}
                >Youtube</motion.a>
                <motion.a href="https://www.linkedin.com/" target="_blank"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1  }}
                          transition={{ duration: 0.5, delay:4.5 }}
                >LinkedIn</motion.a>
                <motion.a href="https://chatgpt.com/" target="_blank"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1  }}
                          transition={{ duration: 0.5, delay:5}}
                >Chatgpt</motion.a>
                <motion.a href="https://www.google.com/" target="_blank"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1  }}
                          transition={{ duration: 0.5, delay:5.5 }}
                >Google</motion.a>
            </div>
            {task ? <motion.div className={'task_div'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1  }}
                                transition={{ duration: 1, delay:6.5 , ease: "easeInOut"}}
                >
                <p className={'task question'}>Today's Focus</p>
                <div className={"checkbox_div"}>
                    <div className={`${ischeck? "strike" : "" } task_div_checkbox`}>
                        <label >
                            <input type="checkbox" name="checkbox" className={` input_form checkbox `} onChange={handleTask} checked={ischeck} />
                            {task}
                        </label>
                    </div>
                        <button className={'button'} onClick={removebutton}><MdDeleteOutline /></button>
                </div>
            </motion.div>:
                <motion.div className={'task_div'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay:6.5, ease: "easeInOut" }}
                >
                    <h1 className={'task question'}>What is Your main task for today?</h1>
                        <form onSubmit={(e) => {e.preventDefault();}}>
                            <input type="text" className="input_form" onKeyPress={handleTaskChange} />
                        </form>
                </motion.div>
            }
            <motion.div className={'quote_div'}
                        initial={{ opacity: 0 , y:-100}}
                        animate={{opacity: 1 ,y:0 }}
                        transition={{ duration: 1.5, delay:4 , ease: "easeInOut"}}
            >
                {quote}
            </motion.div>
            <div className={'github_div'}>
                <button className={'github_button'} onClick={()=>{window.open("https://github.com/darth-sagar?tab=overview&from=2025-06-01&to=2025-06-10","__blank")}} ><FaGithub /></button>
            </div>
            <motion.div className={'todo_div'}
                        initial={{ opacity: 0 , y:100}}
                        animate={{opacity: 1 ,y:0 }}
                        transition={{ duration: 1.5, delay:4 , ease: "easeInOut"}}
            >
                <button onClick={handletodokey}>Todo List</button>
            </motion.div>
            {istodoopen?<Todo/>:""}
        </div>
    );
}
export default Task
