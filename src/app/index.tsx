import * as React from "react";
import * as ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import { AppRouter } from "./components/router/router";

import "./styles/main.css";
import "./styles/index.css";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <ToastContainer />
                <AppRouter />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
