import React, {useState} from 'react'
import './Todolist.css'
import { MdDeleteOutline } from "react-icons/md";
const Todolist = ({todo, isCompleted, _id}) => {

    const [isStrike, setisStrike]=useState(false)
    const HandleStrike=()=>{
        setisStrike(!isStrike)
    }
    const handleDelete=()=>{
        console.log("delete");
    }
    return (
        <div key={_id} className={"todolist_div"}>
            <label className={`${isStrike?"strikethrough":""} input_text`}>
                <input type={"checkbox"} className={"checkbox_input"} onClick={HandleStrike}/>
                {todo}
            </label>
            <button onClick={handleDelete} id={_id} className={"delete_button"}><MdDeleteOutline /></button>
        </div>
    )
}
export default Todolist
