import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(1)
  }
}));

export default function InputUI(props) {
  const { newInput, handleNewInput } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Input
        placeholder="What is your wish?"
        value={newInput}
        onChange={handleNewInput}
        className={classes.input}
        inputProps={{
          "aria-label": "description"
        }}
      />
    </div>
  );
}
