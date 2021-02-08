import React from "react";

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img
                className="recipe-img"
                src={recipe.thumbnail}
                alt="recipe-img"
            />

            <div className="card-recipe-title">{recipe.title}</div>
            <div className="card-recipe-ingredients">{recipe.ingredients}</div>
        </div>
    );
}

export default RecipeCard;
