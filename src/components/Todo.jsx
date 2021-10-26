import React from 'react';
import style from './Todo.module.css';
import trash from '../assets/trash.png';
import edit from '../assets/edit.png';
import { CHANGE_TODO, DELETE_TODO } from '../utils/consts';

const Todo = ({ text, id, setModal }) => {
  return (
    <div className={style.todo}>
      <span>{text}</span>
      <div className={style.buttons}>
        <div
          className={style.button}
          onClick={() => setModal({ isOpen: true, type: CHANGE_TODO, text: 'Изменить дело?', id })}>
          <img src={edit} alt="edit" />
        </div>
        <div
          className={style.button}
          onClick={() => setModal({ isOpen: true, type: DELETE_TODO, text: 'Удалить дело?', id })}>
          <img src={trash} alt="trash" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
