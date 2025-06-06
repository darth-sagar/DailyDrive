import {useContext, createContext, useReducer} from 'react';
import {BrowserReducer} from '../reducer/browser_reducer';

const intialValue={
    name:""
}
const BrowserContext=createContext(intialValue)

const BrowserProvider=({children})=>{
    const [state, dispatch]=useReducer(BrowserReducer, intialValue)

    return (
        <BrowserContext.Provider}>
            {children}
        </BrowserContext.Provider>
    )
}

const useBrowser=()=>{useContext(BrowserContext)}

export {useBrowser , BrowserProvider}