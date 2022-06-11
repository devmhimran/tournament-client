import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import AllUsers from './Component/AllUsers/AllUsers';
import AddTournament from './Component/AddTournament/AddTournament';
import AllTournament from './Component/AllTournament/AllTournament';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
        <Route path='allusers' element={<AllUsers />}></Route>
        <Route path='addtournament' element={<AddTournament />}></Route>
        <Route path='alltournament' element={<AllTournament />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
