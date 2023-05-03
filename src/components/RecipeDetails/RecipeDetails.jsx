import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const RecipeDetails = () => {
    const [recipes, setRecipes] = useState([]);
    const dynamic = useParams();
    const routeId = dynamic.recipesId;

    // console.log(routeId,recipes);

    useEffect(() => {
        fetch('https://famous-chef-server-coders-rabbi.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])



    const recipe = recipes.filter(rcp => rcp.chef_id == routeId);
    console.log(recipe);

    return (
        <div className='container mx-auto'>
            {
                recipe.map(data => <SingleRecipe
                    key={data.id}
                    singleRecipe={data}
                ></SingleRecipe>)
            }
        </div>
    );
};

export default RecipeDetails;