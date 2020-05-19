import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function TodosDisplayed({ todos, deleteTodoitem }: any) {
  return (
    <div>
      <h1 id={todos.id}>
        {todos.name}
        <CheckCircleOutlineIcon
          fontSize="large"
          onClick={() => deleteTodoitem(todos.id)}
        />
      </h1>
    </div>
  );
}

export default TodosDisplayed;
