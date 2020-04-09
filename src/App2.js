import React, { useState, useEffect } from "react";
import "./App2.css";
// import login from './login'
import {
  IconButton,
  Checkbox,
  Button,
  TextField,
  ListItem,
  List
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  PlaylistAdd as PlaylistAddIcon,
  KeyboardArrowRightSharp as KeyboardArrowRightSharpIcon,
  KeyboardArrowLeftSharp as KeyboardArrowLeftSharpIcon
} from "@material-ui/icons";

const TodoList = ({
  babitems,
  selected = [],
  onSelect = () => { }
}) => {
  return (
    <div className="List">
      <List className="List">
        {babitems.map(item => (
          <ListItem key={item.id} className="Li">
            <Checkbox
              checked={selected.includes(item.id)}
              onChange={() => onSelect(item.id)}
              // onKeyPress={onKeyPress()}
              inputProps={{ "aria-label": "primary checkbox" }}
            />

            {item.text}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState([]);
  const [selectedDone, setSelectedDone] = useState([]);
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/",
      { metod: "GET", })
      .then((response) => response.json())
      .then(data => setItems(data.data));
  }, []);

  const handleChange = e => {
    setText(e.target.value);
  };

  const keyPress = e => {
    if (e.key === "Enter") {
      const newItem = {
        text,
        id: Date.now(),
        done: false
      };

      setItems([...items, newItem]);
      setText("");
    }
  };

  const handleSubmit = () => {
    const newItem = {
      text,
      id: Date.now(),
      done: false
    };

    setItems([...items, newItem]);
    setText("");
  };

  const handleSelectTodo = id => {
    if (selectedTodo.includes(id)) {
      setSelectedTodo(selectedTodo.filter(item => item !== id));
    } else {
      setSelectedTodo([...selectedTodo, id]);
    }
  };

  const handleSelectDone = id => {
    if (selectedDone.includes(id)) {
      setSelectedDone(selectedDone.filter(item => item !== id));
    } else {
      setSelectedDone([...selectedDone, id]);
    }
  };

  const handleDone = () => {
    const newItems = [...items];

    for (const item of newItems) {
      if (selectedTodo.includes(item.id)) {
        item.done = true;
      }
    }

    setSelectedTodo([]);
    setItems(newItems);
  };

  const handleUndo = () => {
    const newItems = [...items];

    for (const item of newItems) {
      if (selectedDone.includes(item.id)) {
        item.done = false;
      }
    }

    setSelectedDone([]);
    setItems(newItems);
  };

  const del = () => {
    setItems(
      items.filter(items => {
        return ![...selectedTodo, ...selectedDone].includes(items.id);
      })
    );

    setSelectedTodo([]);
    setSelectedDone([]);
  };

  const todoList = items.filter(item => !item.done);
  const doneList = items.filter(item => item.done);

  const handleToggleTodo = () => {
    if (todoList.length === selectedTodo.length) {
      setSelectedTodo([]);
    } else {
      setSelectedTodo([...todoList.map(({ id }) => id)]);
    }
  };

  const handleToggleDone = () => {
    if (doneList.length === selectedDone.length) {
      setSelectedDone([]);
    } else {
      setSelectedDone([...doneList.map(({ id }) => id)]);
    }
  };

  return (
    <div className="Test">
      <div>
        <div className="CheckAll">
          <Checkbox
            checked={todoList.length && selectedTodo.length === todoList.length}
            onChange={handleToggleTodo}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>

        <h3 className="Titel">Список дел</h3>

        <h3 className="Titel2">Выполнено</h3>
        <div className="CheckAll">
          <Checkbox
            checked={doneList.length && selectedDone.length === doneList.length}
            onChange={handleToggleDone}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>

      <div className="contener">
        <div className="toDo">
          <TodoList
            babitems={todoList}
            selected={selectedTodo}
            onSelect={handleSelectTodo}
          />
        </div>

        <div className="Buttons">
          <Button
            variant="outlined"
            size="small"
            className="button2"
            onClick={handleDone}
            aria-label="move selected right"
          >
            <KeyboardArrowRightSharpIcon />
          </Button>

          <IconButton aria-label="delete">
            <DeleteIcon onClick={del} />
          </IconButton>

          <Button
            variant="outlined"
            size="small"
            className="button3"
            onClick={handleUndo}
            aria-label="move selected right"
          >
            <KeyboardArrowLeftSharpIcon />
          </Button>
        </div>

        <div className="done">
          <TodoList
            babitems={doneList}
            selected={selectedDone}
            onSelect={handleSelectDone}
          />
        </div>
      </div >
      <div className="form">
        <TextField
          id="new-todo"
          label=" Что нужно сделать?"
          className="input"
          onChange={handleChange}
          value={text}
          color="secondary"
          onKeyPress={keyPress}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          className="button"
          disabled={!text.length}
          onClick={handleSubmit}
        > <PlaylistAddIcon />
        </Button>
      </div>
    </div>
  );
};

export default App;
