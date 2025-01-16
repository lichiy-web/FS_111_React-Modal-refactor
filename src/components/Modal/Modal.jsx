import { useEffect, useRef } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', closeModal }) => {
  const focusElement = useRef(null);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  // The handler closes the Modal windows after pressing ESC key and
  // prevents the browser from reacting by default when other keys are pressed
  const handleKeyDown = e =>
    e.key === 'Escape' ? closeModal() : e.preventDefault();

  useEffect(() => {
    focusElement.current.focus();
  }, []);

  return (
    <div
      className={s.wrapper}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown} // Adding a lissener on .wrapper instead of document
      tabIndex="1"
      ref={focusElement}
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
