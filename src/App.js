
import './App.css';
import Chart from './components/Chart';
import GetData from './components/GetData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/chartData' element={<GetData/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
