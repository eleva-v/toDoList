import React, { useState } from 'react';

import './App.css';

const TodoList = ({ babitems, selected = [], onSelect = () => {} }) => { 
  return (
  <div className='List'>
        <ul >
      
      {babitems.map(item => (
        <li key={item.id} className='Li'>
          <button  className="button4" onClick={()=> onCl()}>
          Удалить
        </button>
          <input onChange={() => onSelect(item.id)} checked={selected.includes(item.id)}  type="checkbox" />
            {item.text}
          </li>
      ))}
    </ul>
  </div>
)};

const App = () => {
  const [selected, setSelected] = useState([]);
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');


  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = () => {
    const newItem = {
      text,
      id: Date.now(),
      done: false
    };

    setItems([...items, newItem]);
    setText('');
  }

  const handleSelect = id => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id])
    }
  }

  const handleDone = () => {
    const newItems = [...items];

    for (const item of newItems) {
      if (selected.includes(item.id)) {
        item.done = true;
      }
    }

    setSelected([]);
    setItems(newItems);
  }

  const handleof = () => {
    const newItems = [...items];

    for (const item of newItems) {
      if (selected.includes(item.id)) {
        item.done = false;
      }
    }

    setSelected([]);
    setItems(newItems);
  }

  const forRemoveId = selected
  const del = 
  items = items.filter((items) => {
    return items.id !== forRemoveId;
  });

  //console.log('RENDERING', selected);

  const todoList = items.filter(item => !item.done);
  const doneList = items.filter(item => item.done);

  return (
    <div className="App">
      <div className="App2">
      <div className="Cont">
      <h3 className="App-header"> Список дел</h3>
      <button onClick={handleDone} className="button2">
        Done
      </button>
      <TodoList babitems={todoList} selected={selected} onSelect={handleSelect} /></div>
      
      <div className="Cont2">
      <h3 className="App-header2"> Выполнено</h3>
      <button onClick={handleof} className="button3">
      Сancel
      </button>
      <TodoList babitems={doneList} selected={selected} onSelect={handleSelect} onCl={del} />
      </div>
      </div>
        <div className="form">
        <label className='label' htmlFor="new-todo">
          Что нужно сделать?
        </label>
        <input className="input"
          id="new-todo"
          onChange={handleChange}
          value={text}
        />
        <button disabled={!text.length} className="button" onClick={handleSubmit}>
          Добавить
        </button>
      </div>
    </div>
    
  );
}

export default App;