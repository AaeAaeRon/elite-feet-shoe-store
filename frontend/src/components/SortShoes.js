import React from 'react'

export default class SortShoes extends React.Component {
    render() {
        return(
          <div style={{padding: 10, fontSize: 12, textAlign: "right"}}> 
            
              <button className="float-right" onClick={() => this.props.sortByPrice()}>Sort by price</button>
            
            
              <button className="float-right" onClick={() => this.props.sortByAlpha()}>Sort Alphabetically</button>
            
          </div>
        )
    }
}
