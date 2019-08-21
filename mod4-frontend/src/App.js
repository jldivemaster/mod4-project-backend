import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Signin from './component/Signin'
import NotesContainer from './component/notes_container'
import UserContainer from './component/user_container'
import Welcome from './component/user_container'


const users_api = 'http://localhost:3000/users'
const notes_api = 'http://localhost:3000/notes'

class App extends React.Component {
 constructor() {
   super()
   this.state = {
     users: [],
     notes: []
   }
 }  
  
  componentDidMount() {
    this.fetchUsers();
    this.fetchNotes()
  }

  fetchUsers = () => {
    fetch(users_api)
    .then(res => res.json())
    .then(users => {
      return this.setUsers(users)
    })
  }

  fetchNotes = () => {
    fetch(notes_api)
    .then(res => res.json())
    .then(notes => {
      return this.setNotes(notes)
    })
  }

setNotes = (notes) => {
  this.setState({
    notes: {notes}
  })
}

setUsers = (users) => {
  this.setState({
    users: {users}
  })
}

render() {
  return (
    <div>
      <Router>
        <Route exact path ='/' component={Signin}/>
        <Route exact path='/welcome' component={Welcome}/>
      </Router>
        <div className="User">
        <UserContainer users={this.state.users} fetchUsers={this.fetchUsers}/>
        </div>
        <div className="Notes">
        <NotesContainer notes={this.state.notes} fetchNotes={this.fetchNotes}/>
        </div> 
    </div>
    );
  }
}

export default App;
