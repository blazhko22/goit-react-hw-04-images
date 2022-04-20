import React, { useState } from 'react';
import PropTypes from "prop-types";
import s from './Searchbar.module.css';

function Searchbar({onSubmit}) {
  const [ name, setName ] = useState('');
  
  const onChengeValue = (e) => {
    const { value } = e.currentTarget;
    setName( value );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          onChange={onChengeValue}
          value={name}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};