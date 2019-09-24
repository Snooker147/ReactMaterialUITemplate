import * as React from "react";
import { WithStyles, withStyles, createStyles } from "@material-ui/styles";
import Component from "../base/Component";

// Props Structure
type Props = WithStyles<typeof Style> & { }

// State Structure
type State = { }

class SampleComponent extends Component<Props, State>
{
    private classes = this.props.classes;
    
    public constructor(props: Props)
    {
        super(props);
    }
    
    public render()
    {
        return (
            <div className={this.classes.someClass}>
                <div>
                    A Styled <span>Component!</span>
                </div>

                <div className={this.classes.anotherClass}>
                    Second class
                </div>
            </div>
        );
    }

}

const Style = createStyles({
    someClass: {
        backgroundColor: "red",
        color: "white",
        fontFamily: "RobotoFont",
        "& span": {
            color: "green"
        }
    },
    anotherClass: {
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 0, 0.5)",
    }
});

export default withStyles(Style)(SampleComponent);