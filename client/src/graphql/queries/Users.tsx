import React from 'react';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
    {
        users {
            _id
            username
            password
        }
    }
`;

export const Users = () => {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.users.map((user: any) => (
        <div key={user._id}>
            <ul>
                <li>Id: {user._id}</li>
                <li>User name: {user.username}</li>
                <li>Password: {user.password}</li>
            </ul>
        </div>
    ));
};
