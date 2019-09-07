import React from 'react'
import ShoeCard from './ShoeCard' 

export default class FavShoes extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.props.favoriteShoes.map(all => <ShoeCard all={all}/>)}                     
                </div>
            </div>
        )
    }
}