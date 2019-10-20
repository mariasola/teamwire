import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function ButtonUI(props) {
  const { handleClick } = props;
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleClick}
      >
        Add a new one
      </Button>
    </div>
  );
}
