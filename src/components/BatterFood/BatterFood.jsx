import React from 'react';
import food from '../../assets/food-01.png'
import { FaClock, FaCalendarAlt, FaUser } from 'react-icons/fa';

const BatterFood = () => {
    return (
        <div className='mx-auto text-center grid lg:grid-cols-2 items-center mb-20 mt-28'>
            <img className='mx-auto rounded-2xl md:w-4/5 w-3/5'  src={food} alt="" />
            <div className='text-center lg:text-left'>
                <p className='font-serif mb-12'>Reservation</p>
                <h1 className='text-4xl font-bold mb-5'>Batter Food<span className='text-logo-color'>forver</span></h1>
                <small className='font-mono leading-8'>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
                    <br />   magna suscipit</small>
                <div className='mt-6 md:flex '>
                    <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-2 px-7 border border-logo-color hover:border-transparent rounded font-mono ">
                        Book a Table
                    </button>
                    <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-2 px-7 border border-logo-color hover:border-transparent rounded font-mono md:ms-16 mt-4 md:mt-0">
                        Spacial Food
                    </button>

                </div>
                <div className='bg-header-bg sm:flex justify-around items-center p-8  gap-3 rounded-xl mt-10 shadow-2xl mx-auto ld:mx-0 md:w-4/5' >
                    <div>
                        <h1 className='text-3xl font-bold mb-4 leading-10'>SPACIAL <br /> <span className='text-logo-color'>FOOD</span></h1>
                        <p className='text-xl font-serif text-gray-500'>Sed gravida nisl a <br /> porta tincidunt. <br /> Integer aliquam nisi <br /> sit</p>
                    </div>
                    <div className='text-center'>
                        <p className='mt-3 text-black flex items-center justify-center relative'>
                            <span className='text-xl absolute -ms-40'><FaClock /></span>
                            <input className='py-2 text-black px-10 rounded w-52' type="text" placeholder='Time' />
                        </p>
                        <p className='mt-3 text-black flex items-center justify-center relative'>
                            <span className='text-xl absolute -ms-40'><FaCalendarAlt /></span>
                            <input className='py-2 text-black px-10 rounded w-52' type="text" placeholder='Date' />
                        </p>
                        <p className='mt-3 text-black flex items-center justify-center relative'>
                            <span className='text-xl absolute -ms-40'><FaUser /></span>
                            <input className='py-2 text-black px-10 rounded w-52' type="text" placeholder='Person' />
                        </p>
                        
                        <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-2 px-10 border border-logo-color hover:border-transparent rounded mt-3 font-mono">
                            Find to tabil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BatterFood;