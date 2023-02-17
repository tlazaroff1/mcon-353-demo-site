import { CheckBox } from '@mui/icons-material';
import React, {useState} from 'react';

export const Todo = () => {
    const[input, setInput] = useState("");
    const [todos, setTodos]= useState([{
        title: 'first',
        isComplete: false,
    }, {
        title: 'Second',
        isComplete: true,
    }]);

    const onInput = (event) =>{
        console.log(event.target.value);
        setInput(event.target.value);
    };

    const addTodo = () => {
        //todos.push(input)
        setTodos([...todos, {title: input, isComplete: false}]);
        setInput(" "); 
    };

    const toggleChecked = (todo) => {
       // todo.isComplete = !todo.isComplete;
        const newTodos = [...todos];
        const updatedTodo = newTodos.find((x) => x.title === todo.title);
        updatedTodo.isComplete = !todo.isComplete;
        setTodos(newTodos);

    }
    return (
        <> 
            <h1>Todos</h1>
            <input onInput={onInput} value={input}/>
            <button onClick={addTodo}>Add</button>
            {
                todos.map((todo, index) => (
                <p key={index}>
                    <input type="checkbox" 
                        checked={todo.isComplete} 
                        onInput={() => toggleChecked(todo)}/>
                    {todo.title}
                </p>))
            }
            
        </>

    );
}