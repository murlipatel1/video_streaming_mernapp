import './App.css';
import Overview from './Pages/Overview';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { HomePage } from './Pages/HomePage';
import {Route, Routes} from "react-router-dom"
import Performance from './Pages/Performance';
import NoteState from './context/notes/NoteState';
// import Users from './Pages/Users';
import Creators from './Pages/Creators';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
    <NoteState>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/yourperformance" element={<Performance />} />
        <Route exact path="/overview" element={<Overview/> } />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      </NoteState>
    </>
  );
}

export default App;
