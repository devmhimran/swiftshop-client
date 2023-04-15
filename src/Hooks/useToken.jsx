import React, { useEffect, useState } from 'react';

const useToken = (value) => {
    const [token, setToken] = useState('');
    useEffect(() => {

        const currentUser = {
            uid: value?.user?.uid,
            profileImage: value?.featuredImage,
            name: value?.name,
            email: value?.user?.email
        };

        if (value?.user?.email) {
            fetch(`http://localhost:5000/user/${value?.user?.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }
    }, [value])

    return [token];
};

export default useToken;