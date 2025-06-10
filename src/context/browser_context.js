import {useContext, createContext, useReducer} from 'react';
import {BrowserReducer} from '../reducer/browser_reducer';

const initialValue={
    name:"",
    time:""
}
const BrowserContext=createContext(initialValue)

const BrowserProvider=({children})=>{
    const [{name, time}, BrowserDispatch]=useReducer(BrowserReducer,initialValue)
    return (
        <BrowserContext.Provider value={{name,time, BrowserDispatch}}>
            {children}
        </BrowserContext.Provider>
    )
}

const useBrowser=()=>useContext(BrowserContext);
export {useBrowser , BrowserProvider}