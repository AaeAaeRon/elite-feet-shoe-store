import React from 'react'

export default class ShoeCard extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.all.name}</h1>
            </div>
        )
    }
}