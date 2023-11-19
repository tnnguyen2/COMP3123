import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router";

export default function StudentRow({student}) {

    const navigate = useNavigate()
    const deleteStudent = async (id)=>{
        //alert(`https://reqres.in/api/users/${id}`)
        try{
            const res = await axios.delete(`https://reqres.in/api/users/${id}`)
            console.log(res)
            navigate("/contact")
        }catch(error){
            console.log(error)
        }
    }

    const updateStudent =(id)=>{
        alert(id)
    }

    return (
        <div>
            <h3>{student.first_name} {student.last_name}</h3>
            <p>{student.email}</p>
            <img src={student.avatar} alt="avatar" />
            <button onClick={()=> updateStudent(student.id)}>Update</button>
            <button onClick={()=> deleteStudent(student.id)}>Delete</button>
        </div>
    )
}

