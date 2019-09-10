import React from 'react'
import ShoeCard from './ShoeCard' 

export default class FavShoes extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div className="container">
                <div className="row">
                    {this.props.favoriteShoes.map(all => <ShoeCard all={all} dltFavoriteShoes={this.props.dltFavoriteShoes}/>)}                    
                </div>
            </div>
        )
    }
}