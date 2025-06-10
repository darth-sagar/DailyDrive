import './App.css';
import {images} from './db/images';
import Home from './pages/home/home';
import { useBrowser} from './context/browser_context';
import Task from './pages/Task/Task'
<<<<<<< HEAD
import {useEffect} from 'react';
=======
>>>>>>> d4b1d1c16c01e4ab1e5068de63227ed50961fb97

const randomvalue=Math.floor(Math.random()*images.length);

function App() {
    const bgimage=images[randomvalue].image
<<<<<<< HEAD
    const {name, BrowserDispatch} = useBrowser();

    useEffect(()=>{
        const name=localStorage.getItem("name");
        BrowserDispatch({
            type:"NAME",
            payload:name
        })
    },[])
=======
    const {name} = useBrowser();
    console.log(name)
>>>>>>> d4b1d1c16c01e4ab1e5068de63227ed50961fb97
  return (
    <div className="app" style={{backgroundImage:`url("${bgimage}")`}}>
        {name ? <Task/>: <Home/> }
        {/*<Home/>*/}
    </div>
  );
}

export default App;
