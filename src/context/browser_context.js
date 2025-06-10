import {useContext, createContext, useReducer} from 'react';
import {BrowserReducer} from '../reducer/browser_reducer';

const initialValue={
    name:"",
    time:"",
    message:"",
    task:""
}
const BrowserContext=createContext(initialValue)

const BrowserProvider=({children})=>{
    const [{name, time, message, task}, BrowserDispatch]=useReducer(BrowserReducer,initialValue)
    return (
        <BrowserContext.Provider value={{name,time,message,task, BrowserDispatch}}>
            {children}
        </BrowserContext.Provider>
    )
}

const useBrowser=()=>useContext(BrowserContext);
export {useBrowser , BrowserProvider}
