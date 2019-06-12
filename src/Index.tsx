import * as React from "react";
import * as ReactDOM from "react-dom";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import StylesProvider from "@material-ui/styles/StylesProvider";

import "./Polyfill";
import "./Index.scss";

import Header from "./components/Header";

const theme = createMuiTheme({
    palette: {
        type: "dark"
    },
    typography: {
        fontFamily: "RobotoFont"
    }
});

class Index extends React.Component
{

    public render()
    {
        return (
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <Header />
                    
                </ThemeProvider>
            </StylesProvider>
        )
    }

}

ReactDOM.render(<Index />, document.getElementById("app"));