import React from 'react'

export default class ShoeCard extends React.Component {
    render() {
        return(
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h3 class="card-text">{this.props.all.name}</h3>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
        )
    }
}