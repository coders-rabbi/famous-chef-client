import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBowlFood, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import 'flowbite';

const RecipeDetails = () => {
    const [recipes, setRecipes] = useState([]);
    const [chef, setChef] = useState([])


    const dynamic = useParams();
    const routeId = dynamic.recipesId;
    console.log(routeId);

    // console.log(routeId,recipes);

    useEffect(() => {
        fetch('https://famous-chef-server-coders-rabbi.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    useEffect(() => {

        fetch('https://famous-chef-server-coders-rabbi.vercel.app/famous-chef')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    // console.log(chef);
    const chefInfo = chef.find(chf => chf.chef_id == routeId);
    console.log(chefInfo);

    const recipe = recipes.filter(rcp => rcp.chef_id == routeId);
    // console.log(recipe);

    return (
        <div className='container mx-auto mt-6'>
            <div className='flex items-center bg-header-bg shadow-emerald-50 rounded-md mb-14 w-1/2 gap-6'>
                <img className='w-1/4 rounded-md' src={chefInfo?.img} alt="" />
                <div className='pe-6'>
                    <div className='flex justify-between mb-2'>
                        <p className='flex items-center gap-2 text-2xl'><FontAwesomeIcon icon={faBookmark} />Experiance: {chefInfo?.experiance}</p>
                        <p className='flex items-center gap-2 text-2xl border-s-2 border-logo-color ps-6'><FontAwesomeIcon icon={faBowlFood} />Recipe: {chefInfo?.recipies}</p>
                        <p className='flex items-center gap-2 text-2xl border-s-2 border-logo-color ps-10'><FontAwesomeIcon icon={faThumbsUp} /> {chefInfo?.likes}</p>
                    </div>
                    <h1 className='mb-2'><span className='text-2xl font-semibold'>Name :</span> <span className='font-semibold'>{chefInfo?.name}</span></h1>
                    <p className='leading-7'>Bio: {chefInfo?.bio}</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    recipe.map(data => <SingleRecipe
                        key={data.id}
                        singleRecipe={data}
                    ></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default RecipeDetails;