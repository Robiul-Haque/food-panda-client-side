import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChefRecipeItem from './ChefRecipeItem';

const ChefRecipeItems = () => {

    const ChefRecipes = useLoaderData();

    return (
        <>
            <div className='container'>
                <img src={ChefRecipes.photo} className='w-100 rounded img-fluid' style={{ maxHeight: '500px', objectFit: 'fill' }} alt={ChefRecipes.name} />
                <h3 className='text-center mt-md-4'>{ChefRecipes.name}</h3>
            </div>
            <div className='text-center my-5'>
                <Link to='/' className='btn btn-dark text-decoration-none fw-semibold'>Back to Home</Link>
            </div>
            <div className='my-md-5'>
                {
                    ChefRecipes.recipes.map(recipe => <ChefRecipeItem key={recipe.recipe_id} recipe={recipe}></ChefRecipeItem>)
                }
            </div>
        </>
    );
};

export default ChefRecipeItems;