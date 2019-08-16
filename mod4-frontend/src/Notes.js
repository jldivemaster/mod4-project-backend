import React from 'react';


export default class Notes extends React.Component {

  render() {
    return(
      <div>
      <h2>Note Title (passed thru props) </h2>
      <p>Note Body (passed thru props)</p>
      <ul>{this.props.notes.map(note => {
        return <li>{note}</li>
      })}
      </ul>
      </div>
    )
  }
}
