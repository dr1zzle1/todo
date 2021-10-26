import './App.css';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Todo from './components/Todo';
import { ADD_TODO } from './utils/consts';

function App() {
  const [modal, setModal] = useState({});
  const [todos, setTodos] = useState([]);
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

  let todosItems = todos.map((el) => (
    <Todo id={el.id} key={el.id} text={el.text} setModal={setModal} />
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
          id={modal.id}
          text={modal.text}
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
