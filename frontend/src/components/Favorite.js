import React from 'react'
import ShoeCard from './ShoeCard'

const Favorite = (props) => {
console.log(props)
    return(
        <div class="container-fluid mt-4">


            <div className="row justify-content-center">
            {props.favorites.map(favorite => <ShoeCard shoe = {favorite}/>)}
        </div>
        </div>
    )




}

export default Favorite