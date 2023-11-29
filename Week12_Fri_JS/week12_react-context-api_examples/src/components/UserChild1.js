import React, {Component} from 'react';
import UserContext from '../contexts/UserContext';


export default class UserChild1 extends Component {

    static contextType = UserContext

    constructor(props) {
        super(props)
        console.log(this.context)//undefined
    }

    render() {
        return (
            <div>
                <h2>UserChild1</h2>
                <p>Student Name: {this.context.user.fnm} {this.context.user.lnm}</p>

                <button onClick={() => {
                    this.context.user.display()
                }}>Display
                </button>

                <button onClick={() => {
                    this.context.setUser({
                        ...this.context.user,
                        fnm: "Christopher",
                    })
                }}>Update User
                </button>
            </div>
        );
    }
}

