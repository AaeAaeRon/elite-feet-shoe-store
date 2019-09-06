import React from 'react'

export default class ShoeCard extends React.Component {
    render() {
        return(
            <div className="card text-center">
                <div className="overflow">
                    <img src={this.props.all.img_url} alt="shoes" className="card-img-top"/>

                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.all.name}</h4>
                    <p className="card-text text-secondary"> {this.props.all.category}</p>
                    <p className="card-text text-secondary"> {this.props.all.price}</p>


                </div>


            </div>
            

        )
    }
}

