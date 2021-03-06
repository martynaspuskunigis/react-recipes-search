import * as React from "react";
import { Link } from "react-router-dom";

import { Recipe } from "../../contracts/Recipe";

import "./active-recipe-view.css";

interface Props {
    recipeToDisplay: Recipe;
}

export class ActiveRecipeView extends React.Component<Props> {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="active-recipe-view">
                {this.props.recipeToDisplay != null && (
                    <div className="active-recipe">
                        <img
                            className="active-recipe-img"
                            src={this.props.recipeToDisplay.image_url}
                            alt={this.props.recipeToDisplay.title}
                        />
                        <h3 className="active-recipe-title">{this.props.recipeToDisplay.title}</h3>
                        <h4 className="active-recipe-publisher">
                            Publisher: <span>{this.props.recipeToDisplay.publisher}</span>
                        </h4>
                        <p className="active-recipe-website">
                            Website:
                            <span>
                                <a href={this.props.recipeToDisplay.source_url}>"Check out recipe here!"</a>
                            </span>
                        </p>
                        {this.props.recipeToDisplay.ingredients.map((ingredient, index) => (
                            <div key={`ingredient-item-${ingredient}-${index}`}>{ingredient}</div>
                        ))}
                        <button className="active-recipe-button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
