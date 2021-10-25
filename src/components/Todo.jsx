import React from 'react';
import style from './Todo.module.css';
import trash from '../assets/trash.png';
import edit from '../assets/edit.png';

const Todo = ({ id, text, setModal }) => {
  return (
    <div className={style.todo}>
      <span>{text}</span>
      <div className={style.buttons}>
        <div
          className={style.button}
          onClick={() =>
            setModal({ type: 'CHANGE_TODO', isOpen: true, text: 'Изменить дело?', id })
          }>
          <img src={edit} alt="edit" />
        </div>
        <div
          className={style.button}
          onClick={() =>
            setModal({ type: 'DELETE_TODO', isOpen: true, text: 'Удалить дело?', id })
          }>
          <img src={trash} alt="trash" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
