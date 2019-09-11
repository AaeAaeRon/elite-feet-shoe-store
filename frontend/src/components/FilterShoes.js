  
import React from 'react'

export default class FilterShoes extends React.Component {
    render() {
        return(
          <div style={{padding: 10, fontSize: 12, textAlign: "left"}}>
            <h1 id="store-name">Elite Feet</h1>
            <select value={this.props.value} onChange={(e) => this.props.filterShoes(e.target.value)}>
              <option value="All">All</option> 
              <option value="Basketball">Basketball</option> 
              <option value="Running">Running</option>
              <option value="Casual">Casual</option>
              <option value="Training">Training</option>
              <option value="Golf">Golf</option>


            </select>
          </div>
        )
    }
}