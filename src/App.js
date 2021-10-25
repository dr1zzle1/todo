import './App.css';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Todo from './components/Todo';
const ADD_TODO = 'ADD_TODO';
function App() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, type: null });

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text) {
      setTodos([...todos, { id: todos.length + 1, text }]);
      setModal({ isOpen: false });
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setModal({ isOpen: false });
  };

  const changeTodo = (id, text) => {
    if (text) {
      let newTodos = todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
      setTodos(newTodos);
      setModal({ isOpen: false });
    }
  };

  let todosItems = todos.map(({ id, text }) => (
    <Todo key={id} id={id} text={text} setModal={setModal} />
  ));

  return (
    <div className="main">
      <h1 className="title">Список дел</h1>
      {modal.isOpen && (
        <Modal
          type={modal.type}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
          text={modal.text}
          id={modal.id}
          setModal={setModal}
        />
      )}
      <button
        className="add-button"
        children="Добавить дело"
        onClick={() => {
          setModal({ isOpen: true, type: ADD_TODO, text: 'Новое дело' });
        }}
      />
      {todosItems}
    </div>
  );
}

export default App;
