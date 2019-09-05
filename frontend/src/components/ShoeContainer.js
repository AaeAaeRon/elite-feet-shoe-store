import React from 'react'
import ShoeCard from './ShoeCard'

export default class ShoeContainer extends React.Component {
    render() {
        return(
            <div className ="ui grid container">
                {this.props.displayShoes.map(all => <ShoeCard all={all}/>)}
            </div>
        )
    }
}