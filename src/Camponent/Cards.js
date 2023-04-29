import React, { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <div className='App'>
      {data.map((_data, i) => (
        <p key={_data.id}>
          {i}. {_data.name}
        </p>
      ))}
    </div>
  );
}

export default App;