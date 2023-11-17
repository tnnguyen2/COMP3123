import React, {Component} from 'react';
import axios from "axios";

export default class StudentList extends Component {

    constructor(props) {
        super(props);

    }

    getStudents = async ()=>{
        try {
            let res = await axios.get('https://reqres.in/api/users?page=1')
            console.log(res)
            console.log(res.data)
            console.log(res.data.data)
        } catch(error){
            console.log(error)
        }

    }

    render() {
        return (
            <div>
                <h2>Student List</h2>
                <button onClick={this.getStudents}>Get Students</button>
            </div>
        );
    }
}

