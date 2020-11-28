import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/styles/withStyles";
import createStyles from "@material-ui/styles/createStyles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Props Structure
type Props = WithStyles<typeof Style> & { }

const SampleComponent: React.FunctionComponent<Props> = (props) => 
{
    return (
        <Box my={2}>
            <Typography className={props.classes.centerText}>
                Hello World!
            </Typography>
        </Box>
    )
}

const Style = createStyles({
    centerText: {
        textAlign: "center",
    }
});

export default withStyles(Style)(SampleComponent);