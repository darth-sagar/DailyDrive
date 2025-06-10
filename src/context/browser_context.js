import {useContext, createContext, useReducer} from 'react';
import {BrowserReducer} from '../reducer/browser_reducer';

const initialValue={
<<<<<<< HEAD
    name:"",
    time:""
=======
    name:""
>>>>>>> d4b1d1c16c01e4ab1e5068de63227ed50961fb97
}
const BrowserContext=createContext(initialValue)

const BrowserProvider=({children})=>{
<<<<<<< HEAD
    const [{name, time}, BrowserDispatch]=useReducer(BrowserReducer,initialValue)
    return (
        <BrowserContext.Provider value={{name,time, BrowserDispatch}}>
=======
    const [{name}, BrowserDispatch]=useReducer(BrowserReducer,initialValue)

    return (
        <BrowserContext.Provider value={{name, BrowserDispatch}}>
>>>>>>> d4b1d1c16c01e4ab1e5068de63227ed50961fb97
            {children}
        </BrowserContext.Provider>
    )
}

const useBrowser=()=>useContext(BrowserContext);
<<<<<<< HEAD
=======

>>>>>>> d4b1d1c16c01e4ab1e5068de63227ed50961fb97
export {useBrowser , BrowserProvider}