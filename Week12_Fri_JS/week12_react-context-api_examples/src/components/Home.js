import React, {useContext, useState} from 'react';
import StudentContext from '../contexts/StudentContext';
import Student from "./Student";
import UserContext from "../contexts/UserContext";
import UserChild1 from "./UserChild1";

// const user = {
//     fnm: "John",
//     lnm: "Smith",
//     display: function () {
//         console.log(this.fnm + " " + this.lnm);
//     }
// }

export default function Home() {
    const studentContext = useContext(StudentContext)

    const [user, setUser] = useState({
        fnm: "John",
        lnm: "Smith",
        display: function () {
            console.log(`${this.fnm} ${this.lnm}`);
        }})
    return (
        <div>
            <h2>Home Class Components</h2>
            <p>Student Id: {studentContext.sid}</p>
            <p>Student Name: {studentContext.sfnm} {studentContext.slnm}</p>
            <p>Student Result: {studentContext.marks}</p>
            <button onClick={() => studentContext.display()}>Display</button>

            <Student/>

            <UserContext.Provider value={{user, setUser}}>
                <UserChild1/>
            </UserContext.Provider>
        </div>
    );
}

