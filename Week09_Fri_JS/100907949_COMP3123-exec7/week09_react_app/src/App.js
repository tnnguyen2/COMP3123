import './App.css';
import Student from "./components/student/Student"

function App({logo}) {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Welcome to Fullstack Development - I
          </h2>
          <h3>
            React JS Programming Week09 Lab Exercise
          </h3>
          <Student  sid = "100907949" fullName = "Tony Nguyen"/>
          <p>
            George Brown College - Toronto
          </p>
        </header>
      </div>
  );
}

export default App;
