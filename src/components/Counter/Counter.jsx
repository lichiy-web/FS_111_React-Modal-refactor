import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  // Еффект спрацює лише після першого рендеру! І ВСЕ!
  useEffect(() => {
    console.log('Компонент змонтовано!');
  }, []);

  // Еффект буде спрацьовувати перший раз після рендеру і всі наступні рендери, коли змінився хоч один елемент залежностей (add, delete, update)
  useEffect(() => {
    if (counter === 0) return;
    console.log('Лічильник було змінено:', counter);
    if (counter > 5) {
      setCounter(0);
    }
  }, [counter]);

  // Еффект буде спрацьовувати перший раз після рендеру і тоді, коли ми міняємо крок
  useEffect(() => {
    console.log('Крок було змінено:', step);
  }, [step]);

  // Еффект буде працювати кожен раз коли міняється хоч щось з залежностей
  useEffect(() => {
    console.log('Або лічильник, або крок було змінено');
  }, [counter, step]);

  useEffect(() => {
    console.log('RENDER');
  });

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };
  const handlePlusClick = () => {
    // setCounter(counter + 1);

    setCounter(prev => prev + 1);
  };

  const handleMinusClick = () => {
    if (counter < 1) {
      return alert('STOP CLICKING BY MINUS');
    }
    setCounter(prev => prev - 1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={e => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>
            minus
          </button>
          {counter !== 0 && (
            <button className='btn' onClick={handleResetClick}>
              reset
            </button>
          )}
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
