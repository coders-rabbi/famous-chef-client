import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

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
        <div className='container mx-auto'>
            <div className='flex'>
                <img className='w-1/3' src={chefInfo?.img} alt="" />
                <div>
                    <div className='flex justify-around'>
                        <p>Experiance: {chefInfo?.experiance}</p>
                        <p>Recipe: {chefInfo?.recipies}</p>
                        <p>Like: {chefInfo?.likes}</p>
                    </div>
                    <h1>Name: {chefInfo?.name}</h1>
                    <p>Bio: {chefInfo?.bio}</p>
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