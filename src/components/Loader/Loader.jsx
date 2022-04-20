import React from 'react';
import s from './Loader.module.css';

function Loader({ value, onChangeFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
      />
    </label>
  );
}

export default Loader;