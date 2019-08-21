import React from 'react'

const notes_api = 'http://localhost:3000/notes'


class NotesContainer extends React.Component {

handleNewNoteSubmit = () => {
    return fetch(notes_api, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({ 
        title: this.state.title,
        body: this.state.body,
        user_id: this.props.user_id 
        //get user id from token.  This is just a placeholder

      })
    }).then(res => res.json()).then(notes => {
      return this.props.fetchNotes(notes)
    })
  }
  
  handleUpdateNote = user_id => {
    return fetch(notes_api + '/' + user_id, {
       method: "PATCH",
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify ({
         title: this.state.title,
         body: this.state.body
       })
    }).then(res => res.json()).then(notes => {
      return this.props.fetchNotes(notes)
    })
  }
  
  handleDeleteNote = user_id => {
    return fetch(notes_api + '/' + user_id, {
       method: "DELETE",
    }).then(res => res.json()).then(notes => {
      return this.props.fetchNotes(notes) 
  })
  }
}

export default NotesContainer