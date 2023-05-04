import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Chef = ({ chef }) => {
    const { chef_id, img, name, bio, experiance, recipies, likes } = chef;
    return (
        
        <div>
            <div className="card card-compact w-96 shadow-xl bg-header-bg mb-10">
                <figure><img className='h-96 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-betwee'>
                        <p className='mt-3 text-xl flex gap-2 items-center'><FontAwesomeIcon icon={faBookmark} /><small>Experiance:</small> {experiance}</p>

                        <p className='mt-3 text-xl flex gap-2 items-center'><FontAwesomeIcon icon={faBowlFood} /> <small>Recipe :</small> {recipies}</p>

                        <p className='mt-3 text-xl flex gap-2 items-center'>< FaRegThumbsUp /> {likes}</p>
                    </div>
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='text-xl'>{bio}</p>
                    <div className="card-actions justify-end">
                        <Link to={`../recipesDetails/${chef_id}`}>
                            <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded mt-6">
                                View Recipes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Chef;


