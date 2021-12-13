import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Card>
                    <CardContent>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </header>
        </div>
    );
}

export default App;
