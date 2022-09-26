import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search/Search';
import {Route , Routes} from "react-router-dom"
import Home from './components/display/home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = { <Home/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
