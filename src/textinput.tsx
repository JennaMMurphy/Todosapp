import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      margin: theme.spacing(1),
      width: "200px",
      "& label.Mui-focused": {
        color: "black",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
    },
  },
}));

export default function TextInput({ addValueTodoItem }: any) {
  const classes = useStyles();

  return (
    <form
      onChange={addValueTodoItem}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-secondary"
        label="Add to do item"
        variant="filled"
      />
    </form>
  );
}
