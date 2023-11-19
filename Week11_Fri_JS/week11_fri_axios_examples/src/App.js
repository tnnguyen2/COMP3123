//import logo from './logo.svg';
import './App.css';
import StudentList from "./components/StudentList";
import About from "./components/About";
import Contact from "./components/Contact"
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Week 11 - Axios Examples</h1>
        {/*<StudentList/>*/}
        <BrowserRouter>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/student">Students</NavLink>
            </nav>

            <Routes>
                {/*<Route path="/" element={<App/>}></Route>*/}
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/student" element={<StudentList/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
