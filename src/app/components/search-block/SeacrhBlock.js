import './SearchBlock.scss';

import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';

import LanguageContext from '../language-context/LanguageContext';
import { VOCABULARY } from '../../common/vocabulary';

function SearchBlock({ searchQuery, changeSearchQuery }) {
  const { currentLanguage } = useContext(LanguageContext);

  const [searchInputValue, setSearchInutValue] = useState(searchQuery);

  const changeSeacrhInputValue = ({ target: { value } }) => {
    setSearchInutValue(value);
  };

  const startSearch = (event) => {
    if (event) event.preventDefault();
    if (searchInputValue === '' || searchInputValue === searchQuery) return;
    changeSearchQuery(searchInputValue);
    console.log('new: ', searchInputValue, ', old: ', searchQuery);
  };

  const [isFormActive, setFormActiveState] = useState(false);

  const searchButtonClickHandler = () => {
    if (!isFormActive) {
      setFormActiveState(true);
      return;
    }

    startSearch();
  };

  const closeButtonClickHandler = () => {
    if (!isFormActive) return;

    setSearchInutValue('');
    setFormActiveState(false);
  };

  const translatedPlaceholder = VOCABULARY.placeholder[currentLanguage];

  return (
    <div className="search__container">
      <form className={`search__form ${isFormActive ? 'active' : ''}`} onSubmit={startSearch}>
        <div className="input__container">
          <input
            className="search__input"
            type="text"
            placeholder={translatedPlaceholder}
            value={searchInputValue}
            onChange={changeSeacrhInputValue}
            autoComplete="off"
          />
          <button
            className="search__button button"
            onClick={searchButtonClickHandler}
            type="button"
          >
            <span />
          </button>
        </div>
        <button className="search__close button" onClick={closeButtonClickHandler} type="button">
          Clear search and close input
        </button>
        <button className="search__speech button" type="button">
          Start speech recognition
        </button>
        <button className="search__voice button" type="button">
          Start forecast voice spelling
        </button>
      </form>
    </div>
  );
}

SearchBlock.propTypes = {
  searchQuery: propTypes.string,
  changeSearchQuery: propTypes.func,
};

SearchBlock.defaultProps = {
  searchQuery: '',
  changeSearchQuery: () => {},
};

export default SearchBlock;
