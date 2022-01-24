import React from 'react';
import './App.css';
import List from './List.js';

// Note with switching between shorthand function defs () => thing; and
// explicit form () => {return thing};, DO NOT FORGET the return.
const mockHttpApiCall = () => {
  const books = [
    {title: "Catch 22", author: "Joseph Heller"},
    {title: "Cat's Cradle", author: "Kurt Vonnegut"},
    {title: "The Idiot", author: "Fyodor Dostoevsky"}
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: {books: books}}), 2000);
  });
}

const App = () => {
  const [currentSearchState, searchUpdated] = React.useState('');
  const [books, booksStateUpdateHandler] = React.useState([]);
  React.useEffect(() => {
    mockHttpApiCall().then(result => {
      booksStateUpdateHandler(result.data.books);
    });
  });

  const sVal = currentSearchState.toLowerCase();
  const filteredBooks = books.filter(b => b.title.toLowerCase().includes(sVal));

  const searchHandler = (event) => {    
    searchUpdated(event.target.value);
  }

  // Moved to List component's seatch stuff
  // const [searchTerm, setSearchTerm] = React.useState('')

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>List Search Demo App</p>
        <p>Searching for "{currentSearchState}"</p>
        <List items = {filteredBooks} searchHandler = {searchHandler} search={currentSearchState} />
      </header>
    </div>
  );
}

export default App;
