import React, { Component } from 'react';
import FakeUser from '../../FakeUser/FakeUser';

class User extends Component {
    render() {
        console.log(FakeUser);
        
        return (
            <div>
                <h3>this is user</h3>
            </div>
        );
    }
}

export default User;