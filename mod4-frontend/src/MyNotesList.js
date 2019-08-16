import React from 'react';
import Notes from './Notes';
import ReactDOM from 'react-dom';

export default class MyNotesList extends React.Component {

  openNotes = () => {
    ReactDOM.render(<Notes mod="mod1" notes={this.props.mod1}/>, document.getElementById('open'))
  }

  render() {
    return(
      <div>
      <p>MyNotes Component:</p>
      <ul>
      <li>Mod1 Notes:
      <button onClick={this.openNotes}>Open</button>
      <div id='open'></div>
      </li>
      <li>Mod2 Notes:
      <button onClick={this.openNotes}>Open</button>
      <div id='open'></div>
      </li>

      </ul>
      </div>
    )
  }
}
