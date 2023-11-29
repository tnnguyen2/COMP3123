import './App.css';
import StudentContext from './contexts/StudentContext'
import Home from './components/Home';
import UserChild1 from "./components/UserChild1";
//import Student from "./components/Student";

const student = {
    sid: 1,
    sfnm: "Tony",
    slnm: "Nguyen",
    marks: 5000,

    display: () => {
        console.log("I am from Student Context State Object")
    },

    updateFirstName(name) {
        console.log('First Name Updated')
        this.sfnm = name
    }
}

//<UserContext.Provider value={{e1:employee, e2:employee}}>
function App() {
    return (
        <>
            <h1>ReactJS Context API Example</h1>
            <StudentContext.Provider value={student}>
                <Home/>

            </StudentContext.Provider>

        </>
    );
}

export default App;