import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const labelText = 'Enter name:';
  const buttonText = 'Click me!';

  return (
    <div>
      <label htmlFor="name">{ labelText }</label>
      <input type="text" id="name" />
      <button
        style={{
          backgroundColor: 'gray',
          fontSize: 22,
          padding: 20,
          color: 'white'
        }}>
        { buttonText }
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));