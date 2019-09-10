import React from 'react'
import ShoeCard from './ShoeCard'
import FavoriteCard from './FavoriteCard'

const Favorite = (props) => {
console.log(props)
    return(
        <div class="container-fluid mt-4">


            <div className="row justify-content-center">
            {props.favorites.map(favorite => <FavoriteCard shoe = {favorite} addCart={props.addCart} deletefromFavorite={props.deletefromFavorite}/>)}
        </div>
        </div>
    )




}

export default Favorite