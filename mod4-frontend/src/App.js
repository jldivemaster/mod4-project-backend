import React from 'react';
import './App.css';

const users_api = 'http://localhost:3000/users'
const notes_api = 'http://localhost:3000/notes'

class App extends React.Component {
 constructor() {
   super()
   state = {
     users: [],
     notes: []
   }
 }  
  
  componentDidMount() {
    this.fetchUsers;
    this.fetchNotes
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

handleNewNoteSubmit = () => {
  return fetch(notes_api, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({ 
      title: title,
      body: body,
      user_id: user_id
    })
  }).then(res => res.json()).then(notes => {
    return this.fetchNotes(notes)
  })
}

handleUpdateNote = (id) => {
  return fetch(notes_api + '/' + id, {
     method: "PATCH",
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify ({
       title: title,
       body: body
     })
  }).then(res => res.json()).then(notes => {
    return this.fetchNotes(notes)
  })
}

handleDeleteNote = (id) => {
  return fetch(notes_api + '/' + id, {
     method: "DELETE",
  }).then(res => res.json()).then(notes => {
    return this.fetchNotes(notes) 
})
}


handleNewUserSubmit = () => {
  return fetch(user_api, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({
      name: name,
      username: username,
      location: location, 
      program: program,
      mod_number: mod_number
    })
    }).then(res => res.json()).then(users => {
      return this.fetchUsers(users)
  })
}

handleUserDelete = () => {
    return fetch(user_api, {
      method: "DELETE"
    }).then(res => res.json()).then(users => {
      return this.fetchUsers(users)
    })
}






render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="User">
        <UserContainer 
              users={this.state.users}
              newUser={this.handleNewUserSubmit} 
              deleteUser={this.handleUserDelete}
        />
        </div>

        <div className="Notes">
        <NotesContainer 
        notes={this.state.notes}
        newNote={this.handleNewNoteSubmit} 
        editNote={this.handleUpdateNote}
        deleteNote={this.handleDeleteNote}
        />
        </div> 
              
              
      </header>
    </div>
    );
  }
}

export default App;
