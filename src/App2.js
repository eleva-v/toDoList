import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App2.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import KeyboardArrowRightSharpIcon from '@material-ui/icons/KeyboardArrowRightSharp';
import KeyboardArrowLeftSharpIcon from '@material-ui/icons/KeyboardArrowLeftSharp';


const TodoList = ({ /*onKeyPress = () => { },*/ babitems, selected = [], onSelect = () => { } }) => {
    return (
        <div className='List'>

            <List className="List">

                {babitems.map(item => (
                    <ListItem key={item.id} className='Li'>

                        <Checkbox
                            checked={selected.includes(item.id)}
                            onChange={() => onSelect(item.id)}
                            // onKeyPress={onKeyPress()}
                            inputProps={{ 'aria-label': 'primary checkbox' }}

                        >
                        </Checkbox>

                        {item.text}
                    </ListItem >
                ))}
            </List >
        </div>
    )
};

const App = () => {
    const [selected, setSelected] = useState([]);
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');


    const handleChange = (e) => {
        setText(e.target.value);
    }

    // const keyPress = (e) => {
    //     console.log(e)
    //     if (e.key === 'Enter') {
    //         const newItem = {
    //             text,
    //             id: Date.now(),
    //             done: false
    //         };

    //         setItems([...items, newItem]);
    //         setText('');
    //     }
    // };



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

    const allChecked = () => {
        const newItems = [...todoList];
        let i = [];

        for (const item of newItems) {
            if (!selected.includes(item.id)) {
                i.push(...selected, item.id)
            } else {
                i = [];

            }
            setSelected([...i])
        }
    }

    const allChecked2 = () => {
        const newItems = [...doneList];
        let i = [];

        for (const item of newItems) {
            if (!selected.includes(item.id)) {
                i.push(...selected, item.id)
            } else {
                i = [];

            }
            setSelected([...i])
        }
    }


    const del = () => setItems(items.filter((items) => {
        return !selected.includes(items.id);
    }));

    const todoList = items.filter(item => !item.done);
    const doneList = items.filter(item => item.done);

    return (
        <div className="Test">
            <div >
                <div className="CheckAll">
                    <Checkbox
                        // checked={}
                        onChange={allChecked}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    >
                    </Checkbox>
                </div>
                {/* <button onClick={allChecked} className="button"><input tipe="checkbox" /> </button> */}
                <h3 className="Titel">
                    Список дел
                </h3>

                <h3 className="Titel2">
                    Выполнено
                </h3>
                <div className="CheckAll">
                    <Checkbox

                        onChange={allChecked2}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    >
                    </Checkbox>
                </div>
            </div>

            <div className="contener">

                <div className="toDo">
                    <TodoList babitems={todoList} selected={selected} onSelect={handleSelect} /*onKeyPress={keyPress}*/ />
                </div>

                <div className="Buttons">


                    <Button
                        variant="outlined"
                        size="small"
                        className="button2"
                        onClick={handleDone}
                        startIcon={<KeyboardArrowRightSharpIcon />}
                        aria-label="move selected right"
                    >
                    </Button>

                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={del} />
                    </IconButton>

                    <Button
                        variant="outlined"
                        size="small"
                        className="button3"
                        onClick={handleof}
                        startIcon={<KeyboardArrowLeftSharpIcon />}
                        aria-label="move selected right"
                    >

                    </Button>
                </div>


                <div className="done">
                    <TodoList babitems={doneList} selected={selected} onSelect={handleSelect} /*onKeyPress={keyPress}*/ />
                </div>
            </div>
            <div className="form">

                <TextField id="new-todo" label=" Что нужно сделать?" className="input" onChange={handleChange}
                    value={text} color="secondary" />

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="button"
                    startIcon={<PlaylistAddIcon />}
                    disabled={!text.length} onClick={handleSubmit}
                />



            </div>

        </div>
    );
}

export default App;