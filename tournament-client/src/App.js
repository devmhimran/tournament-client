import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='dashboard' element={
            <Dashboard></Dashboard>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
