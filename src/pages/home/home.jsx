import React from 'react'
import './home.css'
import {useBrowser} from "../../context/browser_context"
import {FaGithub} from 'react-icons/fa';
import {quotes} from '../../db/quotes';
import {motion} from 'framer-motion';
const index = quotes[Math.floor(Math.random() * quotes.length)];
const quote = index.quote;

const Home = () => {
    const {name, BrowserDispatch}=useBrowser();
    const handleChange=(event)=>{
        if(event.key==="Enter"){
            BrowserDispatch({
                type: "NAME",
                payload: event.target.value
            })
            localStorage.setItem("name", event.target.value);
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
            <motion.div className={'quote_div'}
                        initial={{opacity: 0, y:-150}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 3.5, ease: "easeInOut", delay:1}}
            >
                {quote}
            </motion.div>
            <div>
                <button className={'github_button'} onClick={()=>{window.open("https://github.com/darth-sagar?tab=overview&from=2025-06-01&to=2025-06-10","__blank")}} ><FaGithub /></button>
            </div>
        </div>

    )
}
export default Home
