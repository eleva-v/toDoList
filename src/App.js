import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';


const TodoList = ({ onCl= () => {}, babitems, selected = [], onSelect = () => {} }) => { 
  return (
  <div className='List'>
    
   
        <ul >
        
      {babitems.map(item => (
        <li key={item.id} className='Li'>
           <IconButton   aria-label="delete">
        <DeleteIcon onClick={()=> onCl()}/>
      </IconButton>
      <Checkbox
        checked={selected.includes(item.id)} 
        onChange={() => onSelect(item.id)} 
        inputProps={{ 'aria-label': 'primary checkbox' }}
      > 
      </Checkbox>
          
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

  //const forRemoveId = selected
  const del = () => setItems(items.filter((items) => {
    return !(selected.includes(items.id))==items.id ;
  }));

  //console.log('RENDERING', selected);

  const todoList = items.filter(item => !item.done);
  const doneList = items.filter(item => item.done);

  return (
    <div className="App">
      <div className="App2">
      <div className="Cont">
      <h3 className="App-header"> Список дел</h3>
      
      <Button
            variant="outlined"
            size="small"
            className="button2" 
            onClick={handleDone}
            
            aria-label="move selected right"
          >
            &gt;
          </Button>
      <TodoList babitems={todoList} selected={selected} onSelect={handleSelect} onCl={del}/></div>
      
      <div className="Cont2">
      <h3 className="App-header2"> Выполнено</h3>
      
      <Button
            variant="outlined"
            size="small"
            className="button3" 
            onClick={handleof}
            
            aria-label="move selected right"
          >
             &lt;
          </Button>

      <TodoList babitems={doneList} selected={selected} onSelect={handleSelect} onCl={del} />
      </div>
      </div>
        <div className="form">
        <label className='label' htmlFor="new-todo">
          Что нужно сделать?
        </label>
        <TextField id="new-todo" label=" Что нужно сделать?" className="input" onChange={handleChange}
          value={text} color="secondary"/>
       
       <Button
        variant="contained"
        color="primary"
        size="large"
        className="button"
        startIcon={<SaveIcon />}
        disabled={!text.length} onClick={handleSubmit}
      >
        Добавить
      </Button>
        
      </div>
    </div>
    
  );
}

export default App;