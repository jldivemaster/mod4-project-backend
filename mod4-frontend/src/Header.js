import React from 'react'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

export default class Header extends React.Component {

  handleSearch = () => {
    console.log("run search")
  }

  render() {
    return(
      <div>

      <strong>Sort by:   </strong>
      <label>
        <input type="radio" value="Alphabetically" /> {/*checked={this.props.checked === 1} onChange={this.props.onSort}/> */}
          Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" /> {/* checked={this.props.checked === 2} onChange={this.props.onSort}/> */}
          Price
      </label><p>    </p>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.props.onFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label><br />
      <br />
      <label>Search by keyword:</label>
      <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />

    </div>
    )
  }
}
