import React, { useRef, useEffect, useState } from 'react';
import styles from '../css/Form.module.css';

function Form() {
  const [city, setCity] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form>
        <input
          onChange={(e) => setCity(e.target.value)}
          ref={inputRef}
          type='text'
          value={city}
        />
      </form>
    </div>
  );
}

export default Form;
