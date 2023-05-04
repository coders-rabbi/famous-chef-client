import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../assets/banner-01.png'
import About from '../About/About';
import Chef from '../Chef/Chef';
import Footer from '../Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [chef, setChef] = useState([]);



    useEffect(() => {


        fetch('https://famous-chef-server-coders-rabbi.vercel.app/famous-chef')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    return (
        <div className='container mx-auto border border-logo-color px-4'>
            <div className='relative'>
                <img className='w-fit' src={banner} alt="" />
                {/* <h1 className='absolute text-5xl text-white top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 '>Welcome To Famous Chef</h1> */}
                <div className='absolute text-white top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-logo-color text-xl mb-8'>Welcome to the Famous Chef</h1>
                    <h1 className='text-4xl mb-6'>THE FAMOUS CHEF IN <span className='text-logo-color'>THE WORLD</span></h1>
                    <p className='leading-8 mb-14'>The dailies? You know -- milk, bread, eggs -- the dailies. <br />These are the things you eat that you find yourself <br />running out each week (or each day) to purchase. </p>
                    <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded">
                        View More
                    </button>
                </div>
            </div>
            <About></About>
            
            <div className='mt-36'>
                <h1 className='text-4xl font-bold text-center'>Our Famous Chef</h1>
                <div className='mt-10 grid md:grid-cols-3 gap-5 mx-auto'>
                    {
                        chef.map(data => <Chef
                            key={data.id}
                            chef={data}
                        ></Chef>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;