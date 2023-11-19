import React, { Component } from 'react'
import axios from 'axios'
import StudentRow from './StudentRow'
import {Navigate} from "react-router";

export default class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        this.getStudents(1)
    }

    getStudents = async (pageno) => {
        try {
            const res = await axios.get(`https://reqres.in/api/users?page=${pageno}`);
            console.log(res)
            console.log(res.data)
            console.log(res.data.data)
            this.setState({students: res.data.data})
        } catch (error) {
            console.log(error)
        }
    }

    addStudent = async () => {
        try {
            const res = await axios.post('https://reqres.in/api/users', {
                "name": "morpheus",
                "job": "leader"
            })
            console.log(res)
            this.setState({isAdded: true})
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div>
                <h2>Student List</h2>
                <div>
                    {
                        this.state.students.map((student) => {
                                return <StudentRow key={student.id} student={student}/>
                            }
                        )}
                </div>
                <button value = "1" onClick={(e)=>this.getStudents(e.target.value)}>Page 1</button>
                <button value = "2" onClick={(e)=>this.getStudents(e.target.value)}>Page 2</button>
                <button onClick={this.addStudent} >Add Student</button>
                {this.state.isAdded ? <Navigate to="/contact"/> : null}
            </div>
        )
    }
}
