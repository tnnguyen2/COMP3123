import React, { Component } from 'react';
import axios from 'axios';

export default class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        axios
            .get(`https://randomuser.me/api/?results=10`)
            .then((res) => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }

    render() {
        const { persons } = this.state;

        return (
            <div style={{ width: '100%', backgroundColor: 'white', padding: '20px 0' }}>
                <h2 style={{textAlign: 'center', backgroundColor: 'seagreen', color: 'black',padding: '45px 0' }}>Person List</h2>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {persons.map((person, index) => (
                        <div key={index} style={{
                            width: '100%',
                            backgroundColor: 'skyblue',
                            padding: '20px',
                            margin: '10px',
                            borderRadius: '5px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{ flex: '1', marginRight: '10px' }}>
                                <h3 style={{ textTransform: 'uppercase', marginBottom: '10px' }}>Name: {person.name.first} {person.name.last} - {person.login.uuid}</h3>
                                <img src={person.picture.large} alt="User" style={{ width:245, height: "auto", borderRadius: '50%' }} />
                            </div>
                            <div style={{ flex: '1', padding: '15px' }}>
                                <p>User Name: {person.login.username}</p>
                                <p>Gender: {person.gender.toUpperCase()}</p>
                                <p>Time Zone Description: {person.location.timezone.description}</p>
                                <p>Address: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                                <p>Email: {person.email}</p>
                                <p>Birth Date: {person.dob.date}, Age: {person.dob.age}</p>
                                <p>Register Date: {person.registered.date} </p>
                                <p>Phone #: {person.phone}</p>
                                <p>Cell #: {person.cell}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
