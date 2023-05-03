import React from 'react';

const SingleRecipe = ({singleRecipe}) => {
    const {recipies_name,ingradients,cooking_methods,rating} = singleRecipe;
    return (
        <div className=' p-3 rounded-md shadow-2xl'>
            <h1 className='mt-3'><span className='font-bold'>Recipe Name:</span> {recipies_name}</h1>
            <p className='mt-3'><span className='font-bold leading-6'>Ingradients: <br /> </span> <span className='leading-6 text-neutral-500'>{ingradients}</span></p>
            <p className='mt-3'><span className='font-bold'>Cooking_Methods: <br /></span> <span className='text-neutral-500'>{cooking_methods}</span></p>
            <p className='mt-3'>{rating}</p>
        </div>
    );
};

export default SingleRecipe;