import React, { Component } from 'react';
import './App.css';

const array = [4, 2, 6, 5, 7, 1, 9, 3, 8];
const color = ['#333333', '#999999'];

const content = array.map((value, key) => {
  const row = (
    <i key={`item${key}`} style={{ color: color[key % 2] }}>
      {value}
      &nbsp;&nbsp;&nbsp;
    </i>
  );
  // console.log(value)
  return row;
});

class App extends Component {
  render() {
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
