import React from 'react';
import { FaBeer, FaRegThumbsUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Chef = ({ chef }) => {
    const { chef_id,img, name, bio, experiance, recipies, likes } = chef;
    return (
        <div className='text-center border bg-header-bg rounded-md'>
            <img className='rounded-md h-1/3 w-full' src={img} alt="" />
            <div className='text-left px-6 py-4'>
                <div className='flex justify-between'>
                    <p className='mt-3 text-xl flex gap-2 items-center'><FontAwesomeIcon icon={faBookmark} /><small>Experiance:</small> {experiance}</p>

                    <p className='mt-3 text-xl flex gap-2 items-center'><FontAwesomeIcon icon={faBowlFood} /> <small>Recipe :</small> {recipies}</p>

                    <p className='mt-3 text-xl flex gap-2 items-center'>< FaRegThumbsUp /> {likes}</p>
                </div>
                <h1 className='text-3xl font-serif mt-4'>{chef.name}</h1>
                <p className='mt-3 leading-7'>{bio}</p>
                <Link to={`../recipesDetails/${chef_id}`}>
                    <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded mt-6">
                        View Recipes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Chef;