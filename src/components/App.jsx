import { useState } from 'react';
import { Counter } from './Counter/Counter';
import Modal from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <h1>useEffect</h1>
      <Counter />
      <TodoList />
      <button onClick={openModal}>Open modal</button>
      {isOpen && <Modal closeModal={closeModal}>Продам килим!</Modal>}
    </div>
  );
};
export default App;
