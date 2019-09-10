import React from 'react'

export default class SortShoes extends React.Component {
    render() {
        return(
          <div> 
            <div>
              <button className="float-right" onClick={() => this.props.sortByPrice()}>Sort by price</button>
            </div>
            <div>
              <button className="float-right" onClick={() => this.props.sortByAlpha()}>Sort Alphabetically</button>
            </div>
          </div>
        )
    }
}