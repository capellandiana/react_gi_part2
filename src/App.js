import logo from './logo.svg';
import './App.css';
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {person: {
    name: 'Diana',
    number: 704840,
    dob: 'july 30 1997'
  }}

}
render() {
  return (
        <div> 
          <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <BasicInfo person={this.state.person} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </div>
  )
};
}

export default App;
