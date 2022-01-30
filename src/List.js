/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function List({ items = [], searchHandler, search }) {
  return (
    <div className="app-list">
      <p>
        Items Count:
        {items.length}
      </p>
      <div>
        Search:
        {' '}
        <input type="text" onChange={searchHandler} value={search} />
      </div>
      <ul>
        {
          items.map((item) => <li key={item.title}>{item.title}</li>)
        }
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
  searchHandler: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default List;
