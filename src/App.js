import './App.css';
import React from 'react';

//Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { BtnCreateTodo }  from './components/BtnCreateTodo';

const defaultTodos = [
  { text: 'Leer texto', completed: true },
  { text: 'Practicar ingles', completed: false },
  { text: 'Practicar RJSX', completed: false },
  { text: 'Estudiar Hooks', completed: false },
];

function App() {
  return (
    <React.Fragment>
      
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map((todo, index) => (
            <TodoItem 
              key={index} 
              text={todo.text}
              completed={todo.completed}
            />
          ))
        }''
      </TodoList>

      <BtnCreateTodo />
      
    </React.Fragment>
  );
}

export default App;
