import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://foodpanda-seven.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <>
            {
                chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
            }
        </>
    );
};

export default Chefs;