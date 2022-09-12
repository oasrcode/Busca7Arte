import './App.css';
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {MainPage} from './pages/MainPage'
import {FilmPage} from './pages/FilmPage'
import { Menu } from './components/Menu';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>        
         <Routes>
           <Route path='/' element={<MainPage/>}/>
           <Route path='film/:id' element={<FilmPage/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
