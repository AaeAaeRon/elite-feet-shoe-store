import React from 'react'

export default class ShoeCard extends React.Component {
    render() {
        return(
            <div className="ui eight wide column"> 
                <div className ="ui card">
                    <div className="content">
                    <a className="header">                    
                    Name:  {this.props.all.name}
                    </a>
                    <p>Price: {this.props.all.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}