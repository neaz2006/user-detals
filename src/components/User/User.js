import React, { useState } from 'react';
import FakeUser from '../../FakeUser/FakeUser';
import Address from '../Address/Address';

const User = () => {
    const [users,setUsers] = useState(FakeUser);
    console.log(users);
    
    return (
        <div>
            <h3>this user</h3>
            <h3>{users.length}</h3>
            {
                users.map(user =><Address user={user}></Address>)
            }
        </div>
    );
};

export default User;