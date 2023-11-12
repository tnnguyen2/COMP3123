import React from 'react'
import "./Student.css"

const s = {
    color: 'black'
}

export default function Student(props) {
    return (
        <React.Fragment>
            <p style = {s} >{props.sid}</p>
            <p style = {s} >{props.fullName}</p>
        </React.Fragment>
    )
}

Student.defaultProps = {
    fullName: 'Default Full Name',
    sid: 'Default Student ID'
}