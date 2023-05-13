
import './App.css';
import Chart from './components/Chart';
import GetData from './components/GetData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/chartData' element={<GetData/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
