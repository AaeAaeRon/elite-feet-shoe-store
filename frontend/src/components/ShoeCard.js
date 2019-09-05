import React from 'react'

export default class ShoeCard extends React.Component {
    render() {
        return(
            <div className="ui eight wide column"> 
                <div className ="ui card">
                    <div className ="image"><img src=  {this.props.all.img_url}/>

                    </div>
                    <div className="content">
                        <a className="header"> 
                        
                        Name:  {this.props.all.name}
                        </a>
                        <div className= "description">
                        <p>Price: {this.props.all.price}</p> 
                        
                        <p> Category: {this.props.all.category}</p>

                        </div>

                    </div>
                </div>
            </div>
//             <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="..."/>
//             <div class="card-body">
//    <        p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>
//         </div>

        )
    }
}