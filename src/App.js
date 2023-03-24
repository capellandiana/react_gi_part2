import logo from './logo.svg';
import './App.css';
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [
        {
          name: 'Diana',
          number: 704840,
          dob: 'july 30 1997'
        },
        {
          name: 'Andres',
          number: 784097384,
          dob: 'july 9 2000'
        },
        {
          name: 'Junior',
          number: 7045673456,
          dob: 'March 29 2002'
        }
      ]
    }

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
            <ul>
          {this.state.person.map(person => (
            <li key={person.name}>
              <BasicInfo person={person} />
            </li>
          ))}
        </ul>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer" >
              Learn React
            </a>
          </header>
        </div>
      )
    };
  }

export default App;
