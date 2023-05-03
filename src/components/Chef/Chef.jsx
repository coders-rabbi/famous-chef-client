import React from 'react';

const Chef = ({ chef }) => {
    const { img, name, bio, experiance, recipies, likes } = chef;
    return (
        <div className='text-center border bg-header-bg rounded-md'>
            <img className='rounded-md h-1/3' src={img} alt="" />
            <div className='text-left px-6 py-4'>
                <h1 className='text-3xl font-serif mt-4'>{chef.name}</h1>
                <p className='mt-3 leading-7'>{bio}</p>
                <p className='mt-3 text-2xl'>Experiance: {experiance}</p>
                <p className='mt-3 text-2xl'>Recipes: {recipies}</p>
                <p className='mt-3 text-2xl'>Like: {likes}</p>
                <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded mt-6">
                    View Recipes
                </button>
            </div>
        </div>
    );
};

export default Chef;