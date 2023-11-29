import React, {Component} from 'react';
import StudentContext from '../contexts/StudentContext';

class Student extends Component {

    static contextType = StudentContext

    constructor(props) {
        super()
        //this.context
    }

    render() {
        return (
            <div>
                <h1>Student</h1>
                <p>Student Id: {this.context.sid}</p>
                <p>Student Name: {this.context.sfnm} {this.context.slnm}</p>
                <p>Student Result: {this.context.marks}</p>

                <StudentContext.Consumer>
                    {
                        (studentContext) => {
                            return (
                                <>
                                    <h2>Student Context Access as a Component</h2>
                                    <p>Student Id: {studentContext.sid}</p>
                                    <p>Student Name: {studentContext.sfnm} {studentContext.slnm}</p>
                                    <p>Student Result: {studentContext.marks}</p>
                                </>
                            )
                        }
                    }
                </StudentContext.Consumer>
            </div>
        );
    }
}

export default Student;