import React, {Component} from 'react'

class Signin extends Component {

    handleSubmit = event => {
        event.preventDefault();
        console.log({target: event.target})
    }


   render() {
       return(

        <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">username</label><br />
              <input type="username" id="username" name="username" />
              <label htmlFor="password">password</label><br />
              <input type="password" id="password" name="password" />
              <br />
              <input type="submit" value="Sign In"/>
            </form>

        </div>

       )
   }

}

export default Signin