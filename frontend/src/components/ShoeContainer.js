import React from 'react'
import ShoeCard from './ShoeCard'

export default class ShoeContainer extends React.Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12">


                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-xs-3">                
                    {this.props.displayShoes.map(all => <ShoeCard all={all}/>)}
                    </div>
                </div>
                </div>
             </div>
        )
    }
}