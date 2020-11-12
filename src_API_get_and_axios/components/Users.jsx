import React from 'react';

const Users = (props) => {

    useEffect(() => {
        props.getAPI('users');
        return () => props.clearState();
    }, []);

    return (
        <ul>
            {props.users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    )
}

export default Users;