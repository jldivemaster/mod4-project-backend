import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile'
import MyNotesList from './MyNotesList'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: {},
      currentNotes: []
    }
  }

  // componentDidMount = () => {
  //   fetch('userurl').then(resp => resp.json()).then(data => this.setState({
  //      currentUser: data.user,
  //      currentNotes: [...data.user.notes]
  //   }))
  // }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UserProfile />
        <br />
        <MyNotesList mod1={["M1Note1", "M1Note2"]}
                     mod2={["M2Note1", "M2Note2"]} />
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
 }

}

export default App;
