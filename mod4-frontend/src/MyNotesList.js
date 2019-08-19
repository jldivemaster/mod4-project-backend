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
      <p>MyNotesList Component:</p>
      <ul>
      <li>Mod1 Notes:
      <button class="ui blue toggle button" onClick={this.openNotes}>Open</button>
      <div id='open'></div>
      </li>
      <br />
      <li>Mod2 Notes:
      <button class="ui blue toggle button" onClick={this.openNotes}>Open</button>
      <div id='open'></div>
      </li>
      </ul>
      <br />
      or
      <div class="ui top attached tabular menu">
  <a class="item active" data-tab="first">First</a>
  <a class="item" data-tab="second">Second</a>
  <a class="item" data-tab="third">Third</a>
  <a class="item" data-tab="fourth">Fourth</a>
  <a class="item" data-tab="fifth">Fifth</a>
    </div>
    <div class="ui bottom attached tab segment active" data-tab="first">
      Mod 1 Notes
    </div>
    <div class="ui bottom attached tab segment" data-tab="second">
      Mod 2 Notes
    </div>
    <div class="ui bottom attached tab segment" data-tab="third">
      Mod 3 Notes
    </div>
    <div class="ui bottom attached tab segment" data-tab="fourth">
      Mod 4 Notes
    </div>
    <div class="ui bottom attached tab segment" data-tab="fifth">
      Mod 5 Notes
    </div>
      </div>
    )
  }
}
