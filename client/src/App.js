import './App.css';
import Overview from './Pages/Overview';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { HomePage } from './Pages/HomePage';
import {Route, Routes} from "react-router-dom"
import Performance from './Pages/Performance';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/yourperformance" element={<Performance />} />
        <Route exact path="/overview" element={<Overview/> } />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
