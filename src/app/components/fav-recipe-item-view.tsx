import * as React from "react";
import { Link } from "react-router-dom";

import { Recipe } from "./../contracts/Recipe";
import { RecipesActionsCreators } from "./../recipes-actions-creators";

interface Props {
    recipe: Recipe;
}

export class FavRecipesItemView extends React.Component<Props> {
    // private handleFavoriteClick(event: React.MouseEvent<HTMLDivElement>, recipe: Recipe): void {
    //     if (this.props.isFavorite) {
    //         RecipesActionsCreators.removeRecipeFromFavourites(recipe.recipe_id);
    //     } else {
    //         RecipesActionsCreators.addRecipeToFavourites(recipe);
    //     }
    // }
    // onClick={event => this.handleFavoriteClick(event, this.props.recipe)}

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="recipes__box">
                <img className="recipe__box-img" src={this.props.recipe.image_url} alt={this.props.recipe.title} />
                <div className="recipe__text">
                    <h5 className="recipes__title">
                        {this.props.recipe.title.length < 20
                            ? `${this.props.recipe.title}`
                            : `${this.props.recipe.title.substring(0, 25)}...`}
                    </h5>
                    <p className="recipes__subtitle">
                        Publisher: <span>{this.props.recipe.publisher}</span>
                    </p>
                    <div className="fas fa-star" />
                </div>
                <button className="recipe_buttons">
                    <Link to={`/recipe/${this.props.recipe.recipe_id}`}>View Recipe</Link>
                </button>
            </div>
        );
    }
}
