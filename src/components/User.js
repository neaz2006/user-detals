import React, { useState } from 'react';
import FakeUser from '../Fakedata/FakeUser';


const User = (props) => {  
    const [users, setUsers]=useState(FakeUser)
   console.log(props.name);
   const {address, company,email,name,phone,website} = users;
    return (
        <div>
            <h1>this shope</h1>
            <h3>{users.length}</h3>
            {users.map(user=>
             <h2> {user.name}</h2>
             
            )}
                
            
        </div>
    );
};

export default User;