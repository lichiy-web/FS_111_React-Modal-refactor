import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';

export const TodoList = () => {
  // const [todos, setTodos] = useState(() => {
  //   // 1. Ідемо в лс
  //   // 2. Забираємо по ключу значення
  //   // 3. Приводимо його в парс
  //   // 4. Перевіряємо довжину
  //   // 5. Якщо є довжина - повертаємо наш масив
  //   // 6. Інакше повернемо дефолтне значення
  //   const savedData = JSON.parse(localStorage.getItem('todos')); // null -> null.length
  //   if (savedData?.length) {
  //     return savedData;
  //   }
  // });

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleDelete = id => {
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
  };

  const addTodo = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: newValue,
    };
    setTodos(prev => [...prev, newObj]);
    setNewValue('');
  };

  return (
    <div>
      <div className='flex'>
        <input value={newValue} onChange={e => setNewValue(e.target.value)} className={s.input} />
        <button onClick={addTodo} className='btn border'>
          Add
        </button>
      </div>

      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};
