import './App.css';
import {images} from './db/images';
import Home from './pages/home/home';

const randomvalue=Math.floor(Math.random()*images.length);

function App() {
    const bgimage=images[randomvalue].image
  return (
    <div className="app" style={{backgroundImage:`url("${bgimage}")`}}>

        <Home/>
    </div>
  );
}

export default App;
