import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import MyComponent from './MyComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <Clock></Clock>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
