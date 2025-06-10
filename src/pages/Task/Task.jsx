import './Task.css'
import {useBrowser} from '../../context/browser_context';
import React, {useState} from 'react'
import {useEffect} from 'react';
// import {quotes} from '../../db/quotes';
// import { motion } from 'framer-motion';


const Task = () => {

    const [ischeck, setischeck] = useState(false)
    const {time,message,task, BrowserDispatch} = useBrowser();
    const {name} = useBrowser();

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
    return (
        <div className={"main_div"}>
            <h1 className="time">{time}</h1>
            <h1 className="task">{message}, {`${name}`}</h1>
            {/*<h1 className="task">You are a developer</h1>*/}
            <div className="links">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Youtube</a>
                <a href="https://www.linkedin.com/feed/" target="_blank" >LinkedIn</a>
                <a href="https://chatgpt.com/" target="_blank" >Chatgpt</a>
                <a href="https://www.google.com/" target="_blank">Google</a>
            </div>
            {task ? <div className={'task_div'}>
                <p className={'task question'}>Today's Focus</p>
                <div className={"checkbox_div"}>
                    <div className={`${ischeck? "strike" : "" } task_div_checkbox`}>
                        <label >
                            <input type="checkbox" name="checkbox" className={` input_form checkbox `} onChange={handleTask} checked={ischeck} />
                            {task}
                        </label>
                    </div>
                        <button className={'button'} onClick={removebutton}>X</button>
                </div>
            </div>:
                <div className={'task_div'}>
                    <h1 className={'task question'}>What is Your main task for today?</h1>
                        <form onSubmit={(e) => {e.preventDefault();}}>
                            <input type="text" className="input_form" onKeyPress={handleTaskChange} />
                        </form>
                </div>
            }
        </div>
    );
}
export default Task
