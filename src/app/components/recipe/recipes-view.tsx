import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { SearchView } from "../search/search-view";
import { RecipesContainer } from "../../containers/recipes-containers/recipes-container";
import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";

interface Params {
    searchQuery: string;
}

interface Props extends RouteComponentProps<Params> {}

export class RecipesView extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentSearchQuery: ""
        };
    }
    public componentWillReceiveProps(props: Props): void {
        if (props.match.params.searchQuery != null) {
            RecipesActionsCreators.searchForRecipes(props.match.params.searchQuery);
        }
    }
    public componentDidMount(): void {
        if (this.props.match.params.searchQuery != null) {
            RecipesActionsCreators.searchForRecipes(this.props.match.params.searchQuery);
        }
    }
    public render(): JSX.Element {
        return (
            <div className="recipes-view">
                <SearchView />
                <RecipesContainer />
            </div>
        );
    }
}
