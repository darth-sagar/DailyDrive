import React from 'react'
import './home.css'
import {useBrowser} from "../../context/browser_context"
import {type} from '@testing-library/user-event/dist/type';

const Home = () => {
    const {name, BrowserDispatch}=useBrowser();
    const handleChange=(event)=>{
        if(event.key==="Enter"){
            BrowserDispatch({
                type: "NAME",
                payload: event.target.value
            })
        }

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return (
        <div className="parent_div">
            <div>
                <h1 className="top_heading">Hello, What's Your Name</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input_form" onKeyPress={handleChange}/>
            </form>
        </div>
    )
}
export default Home
