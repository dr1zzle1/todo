import React, { useState } from 'react';
import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from '../utils/consts';
import style from './Modal.module.css';

const Modal = ({ id, text, type, addTodo, changeTodo, deleteTodo, setModal }) => {
  const [todoText, setTodoText] = useState('');
  return (
    <div className={style.modal}>
      <div className={style.title}>{text}</div>
      {(type === ADD_TODO || type === CHANGE_TODO) && (
        <input
          className={style.input}
          autoFocus={true}
          value={todoText}
          onChange={(e) => setTodoText(e.currentTarget.value)}
        />
      )}
      <div className={style.buttons}>
        {type === ADD_TODO && (
          <button children="Добавить" className={style.button} onClick={() => addTodo(todoText)} />
        )}
        {type === CHANGE_TODO && (
          <button
            children="Изменить"
            className={style.button}
            onClick={() => changeTodo(id, todoText)}
          />
        )}
        {type === DELETE_TODO && (
          <button children="Удалить" className={style.button} onClick={() => deleteTodo(id)} />
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
