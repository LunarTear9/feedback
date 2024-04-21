import NavBar from './navigation.js';
import Feedback from './feedback.js';
import Home from './Home.js';
import Marios from './Marios.js';
import Kostas from './Kostas.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
     
        <NavBar />
       
        <div class="h-divider">
  <div class="shadow"></div>
  </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/Marios" element={<Marios />}></Route>
            <Route path="/Kostas" element={<Kostas />}></Route>
            
            

              
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;