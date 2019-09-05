import React from 'react'

export default class ShoeCard extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.shoe.name}</h1>
            </div>
        )
    }
}