import React from 'react'


export default class ShoeCard extends React.Component {
    render() {
        return(
            // <div className="card">
            <div className="col-lg-4" onClick={() => this.props.addFavoriteShoes(this.props.all)}> 
            <div className="card text-center">
                <img className="card-img-top" src={this.props.all.img_url} alt="shoes">

                </img>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.all.name}</h4>
                    <p className="card-text text-secondary"> {this.props.all.category}</p>
                    <p className="card-text text-secondary"> {this.props.all.price}</p>


                </div>


            </div>
            </div>

    

        )
    }
}

