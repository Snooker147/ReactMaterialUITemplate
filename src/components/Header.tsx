import * as React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class Header extends React.Component
{

    public render()
    {
        return (
            <div className="header">
                <Typography className="header-text">
                    Header
                </Typography>

                <Button variant="contained">
                    A Button!
                </Button>
            </div>
        )
    }

}