import React from 'react';

const users_api = 'http://localhost:3000/users'

class UserContainer extends React.Component {
 constructor() {
     super()
     this.state = {
         first_name: "",
         city: "",
         program: "",
         mod_number: ""
     }
 }

 handleUserEdit = (user_id) => {
    return fetch(users_api + "/" + user_id, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({
        first_name: this.state.first_name,
        city: this.state.city, 
        program: this.state.program,
        mod_number: this.state.mod_number
      })
      }).then(res => res.json()).then(users => {
        return this.fetchUsers(users)
    })
  }

  handleChange = () => {

  }

 render() {
     return (
         <div></div>
     )
 }

}

export default UserContainer