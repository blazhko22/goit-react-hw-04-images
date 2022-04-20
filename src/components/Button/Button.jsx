import React from 'react';
import s from './Button.module.css';

function Button({ load }) {
  return (
    <button
      className={s.Button}
      aria-label="Load more"
      type="button"
      onClick={load}
    >
      Load more
    </button>
  );
}

export default Button;