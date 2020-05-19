//@ts-nocheck
import React, { useState, useEffect } from "react";
import TodosDisplayed from "./todosDisplayed";
import SubmitButton from "./button";
import TextInput from "./textinput";

function TodosFetching() {
  const [todosList, setTodosList] = useState<Array<{ id: number }>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [inputValue, setInputValue] = useState();

  //useEffect fecthes and displayed all todo items on api
  useEffect(() => {
    setLoading(true);
    fetch("https://todos-nodejs-list.herokuapp.com/api/todos")
      .then((response) => response.json())
      .then((response) => {
        setTodosList(response);
        setLoading(false);
      });
  }, []);

  //deleteTodoitem recieves id and sends to api to delete given item; then will update state to new todos
  const deleteTodoitem = async (id: number) => {
    let response = await fetch(
      "https://todos-nodejs-list.herokuapp.com/api/todos/" + id,
      {
        method: "DELETE",
      }
    );
    let deletedResponse = await response.json();
    setTodosList(deletedResponse);
  };

  //changes state to a value entered into textbox
  const addValueTodoItem = (e) => {
    setInputValue(e.target.value);
  };
  //once sumbit button is clicked, this sends to API the value and returns back updated value
  const updateTodoList = async () => {
    let response = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValue,
      }),
    };
    try {
      const fetchResponse = await fetch(
        "https://todos-nodejs-list.herokuapp.com/api/todos/",
        response
      );
      let addedResponse = await fetchResponse.json();
      setTodosList(addedResponse);
    } catch (e) {
      return console.log(e);
    }
  };

  return (
    <>
      <TextInput addValueTodoItem={(e) => addValueTodoItem(e)} />
      <SubmitButton updateTodoList={updateTodoList}>Submit</SubmitButton>

      {todosList.map((todos) => (
        <TodosDisplayed
          key={todos.id}
          deleteTodoitem={deleteTodoitem}
          todos={todos}
        />
      ))}
    </>
  );
}

export default TodosFetching;
