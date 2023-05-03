import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            // .then(data => console.log(data))
    }, [])

    return (
        <div>
            {/* {
                chefs.map((chef) => <Chef chefs={chef}></Chef>)
            } */}
            {
                chefs.map(chef => <div>{chef.length}</div>)
            }
        </div>
    );
};

export default Chefs;