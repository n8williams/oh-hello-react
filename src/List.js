import './App.css';

const List = ({items = [], searchHandler, search}) => {
  return (
    <div className="app-list">
      <p>Items Count: {items.length}</p>
      <div>
        Search: <input type="text" onChange={searchHandler} value={search} />
      </div>
      <ul>
        {
          items.map((item, _index) => {
            return <li key={item.title}>{item.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default List;
