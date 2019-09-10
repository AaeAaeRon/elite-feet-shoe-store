import React from 'react'

export default class FilterShoes extends React.Component {
    render() {
        return(
          <div style={{padding: 10, fontSize: 12, textAlign: "center"}}>
          <br>
            
          </br>
            <p>Choose type of shoe</p>
            <select value={this.props.value} onChange={(e) => this.props.filterShoes(e.target.value)}>
              <option value="All">All</option> 
              <option value="Basketball">Basketball</option> 
              <option value="Running">Running</option>
            </select>
          </div>
        )
    }
}