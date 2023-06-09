import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const SingleRecipe = ({ singleRecipe }) => {
    const [disabled, setDisabled] = useState(false);

    const notify = () => {
        toast('Added to your favorite recipe list!');
        setDisabled(true);
    };

    const { recipies_name, ingradients, cooking_methods, rating } = singleRecipe;
    return (
        <div className=' p-3 rounded-md bg-header-bg shadow-emerald-50'>
            <h1 className='mt-3'><span className='font-bold'>Recipe Name:</span> {recipies_name}</h1>
            <p className='mt-3'><span className='font-bold leading-6'>Ingradients: <br /> </span> <span className='leading-6 text-neutral-500'>{ingradients}</span></p>
            <p className='mt-3'><span className='font-bold'>Cooking_Methods: <br /></span> <span className='text-neutral-500'>{cooking_methods}</span></p>
            <div className='flex items-center justify-between gap-4'>
                <Rating
                    placeholderRating={rating}
                    readonly
                    emptySymbol={
                        <FaRegStar></FaRegStar>
                    }
                    placeholderSymbol={
                        <FaStar></FaStar>
                    }
                    fullSymbol={
                        <FaStar></FaStar>
                    }
                />
                <p className='mt-3 text-2xl'>{rating}</p>
                <button className="btn btn-secondary" disabled={disabled} onClick={() => notify()} variant='primary'>Favorite</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleRecipe;