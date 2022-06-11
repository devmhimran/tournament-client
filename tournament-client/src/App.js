import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import AllUsers from './Component/AllUsers/AllUsers';
import AddTournament from './Component/AddTournament/AddTournament';
import AllTournament from './Component/AllTournament/AllTournament';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import RequireAuth from './Component/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
        <Route path='allusers' element={<AllUsers />}></Route>
        <Route path='addtournament' element={<AddTournament />}></Route>
        <Route path='alltournament' element={<AllTournament />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
