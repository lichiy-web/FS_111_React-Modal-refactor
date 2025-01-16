import s from './TodoList.module.css';
export const TodoItem = ({ id, completed, todo, handleDelete }) => {
  return (
    <li className={s.item}>
      <span>{todo}</span>
      <button onClick={() => handleDelete(id)} className='btn border'>
        Delete
      </button>
    </li>
  );
};
