import './App.css';
import {images} from './db/images';
import Home from './pages/home/home';
import { useBrowser} from './context/browser_context';
import Task from './pages/Task/Task'
import {useEffect} from 'react';

function App() {
    const bgimage=images[0].image
    const {name, BrowserDispatch} = useBrowser();

    useEffect(()=>{
        const name=localStorage.getItem("name");
        BrowserDispatch({
            type:"NAME",
            payload:name
        })
    },[])
  return (
    <div className="app" style={{backgroundImage:`url("${bgimage}")`}}>
        {name ? <Task/>: <Home/> }
    </div>
  );
}

export default App;
