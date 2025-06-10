import './Task.css'
import {useBrowser} from '../../context/browser_context';
import React from 'react'
import {useEffect} from 'react';
// import { motion } from 'framer-motion';

const Task = () => {
    const {time,BrowserDispatch}=useBrowser();
    const {name} = useBrowser();

    useEffect(()=>{
        getCurrentTime();
    },[time])

    const getCurrentTime =()=>{
        const now=new Date();
        let hours=now.getHours();
        let minutes=now.getMinutes();
        hours=hours<10?"0"+hours:hours;
        minutes=minutes<10?"0"+minutes:minutes;
        const currentTimeIs=`${hours}:${minutes}`;
        setTimeout(getCurrentTime,1000);
        BrowserDispatch({
            type:"TIME",
            payload:currentTimeIs
        })
    }
    return (
        <div>
            {/*<motion.h1 className="time"*/}
            {/*           initial={{ opacity: 0, x: +50 }}*/}
            {/*           animate={{ opacity: 1, x: 0 }}*/}
            {/*           transition={{*/}
            {/*               duration: 0.8,*/}
            {/*               ease: "easeOut",*/}
            {/*           }}>*/}
            {/*    {time}*/}
            {/*</motion.h1>*/}
            {/*<motion.h1*/}
            {/*    className="task"*/}
            {/*    initial={{ opacity: 0, x: -500 }}*/}
            {/*    animate={{ opacity: 1, x: 0 }}*/}
            {/*    transition={{*/}
            {/*        duration: 0.8,*/}
            {/*        ease: "easeOut",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Hello {name}*/}
            {/*</motion.h1>*/}
            <h1 className="time">{time}</h1>
            <h1 className="task">Hello {name}</h1>
        </div>

    )
}
export default Task
