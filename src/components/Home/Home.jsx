import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [chef, setChef] = useState([]);

    

    useEffect(() =>{
        

        fetch('https://famous-chef-server-coders-rabbi.vercel.app/famous-chef')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='container'>
            
        </div>
    );
};

export default Home;