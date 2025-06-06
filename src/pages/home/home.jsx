import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className="parent_div">
            <div>
                <h1 className="top_heading">Hello, What's Your Name</h1>
            </div>
            <form>
                <input type="text" placeholder="" className="input_form"/>

            </form>
        </div>
    )
}
export default Home
