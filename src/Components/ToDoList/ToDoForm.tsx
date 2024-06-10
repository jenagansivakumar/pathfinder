import { TextField, Container, Button, Typography, List, ListItem } from '@mui/material';
import React, { useState } from 'react';

export default function ToDoForm() {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        // console.log(e);
        setInput(e.target.value);
    }

    function handleAddItem(e: React.MouseEvent<HTMLElement>) {
        if (input.trim() !== "") {
            setTodos([...todos, input]);
            setInput("");
        }
    }

    const handleRemove = (deleteTodo: string) => {
      const newTodos = todos.filter((todo)=> todo !== deleteTodo)
      setTodos(newTodos)
    }

    return (
        <Container className='ToDoForm'>
           <Typography variant="h6" component="div" gutterBottom>
                To-Do List
            </Typography>
            <TextField
                variant='outlined'
                value={input}
                onChange={onChange}
                placeholder="Add new task"
            />
            <Button onClick={handleAddItem} variant="contained" color="primary">
                Add Todo
            </Button>
           
            <List>
                {todos.map((todo, index) => (
                    <ListItem key={index}>{todo}
                    <Button onClick={()=> handleRemove(todo)}> Remove </Button>
                    </ListItem>
                    
                    
                ))}
            </List>
        </Container>
    );
}
