import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', closeModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // useEffect(() => {
  //   const handleKeyDown = e => {
  //     console.log(e.key);
  //     if (e.key === 'Escape') {
  //       closeModal();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyDown);
  //   const timeoutId = setTimeout(() => {
  //     console.log('O_O');
  //   }, 3000);
  //   const intervalId = setInterval(() => {
  //     console.log(new Date().toLocaleTimeString());
  //   }, 1000);
  //   return () => {
  //     console.log('Мене закрили!');
  //     clearInterval(intervalId);
  //     clearTimeout(timeoutId);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [closeModal]);
  return (
    <div
      className={s.wrapper}
      onClick={handleBackdropClick}
      onKeyDown={closeModal}
    >
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={closeModal} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
