import './App.css';
import {images} from './db/images';
import Home from './pages/home/home';
import { useBrowser} from './context/browser_context';
import Task from './pages/Task/Task'

const randomvalue=Math.floor(Math.random()*images.length);

function App() {
    const bgimage=images[randomvalue].image
    const {name} = useBrowser();
    console.log(name)
  return (
    <div className="app" style={{backgroundImage:`url("${bgimage}")`}}>
        {name ? <Task/>: <Home/> }
        {/*<Home/>*/}
    </div>
  );
}

export default App;
