import React, { useState } from 'react';
import style from './Modal.module.css';

const Modal = ({ text, type, addTodo, deleteTodo, changeTodo, id, setModal }) => {
  const [todoText, setTodoText] = useState('');
  return (
    <div className={style.modal}>
      <div className={style.title}>{text}</div>
      {(type === 'ADD_TODO' || type === 'CHANGE_TODO') && (
        <input
          className={style.input}
          autoFocus={true}
          value={todoText}
          onChange={(e) => setTodoText(e.currentTarget.value)}
        />
      )}
      <div className="buttons">
        {type === 'ADD_TODO' ? (
          <button className={style.button} onClick={() => addTodo(todoText)}>
            Добавить
          </button>
        ) : type === 'DELETE_TODO' ? (
          <button className={`${style.button} ${style.delete}`} onClick={() => deleteTodo(id)}>
            Удалить
          </button>
        ) : type === 'CHANGE_TODO' ? (
          <button
            className={`${style.button} ${style.delete}`}
            onClick={() => changeTodo(id, todoText)}>
            Изменить
          </button>
        ) : (
          ''
        )}
        <button
          className={`${style.button} ${style.cancel}`}
          onClick={() => setModal({ isOpen: false, type: '' })}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default Modal;
