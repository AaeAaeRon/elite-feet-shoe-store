import React, {Component} from 'react'
import { FaRunning, FaHiking, FaBasketballBall} from "react-icons/fa";

export default class Footer extends Component {

    state = {
        services: [
        {
            icon: <FaRunning/>,
            title: "Speed",
            info: "Our design is built to get you to your best speed"


        },
        {
            icon: <FaHiking/>,
            title: "Endurance",
            info: "Tested to handle anything thrown your way"
        }, 
        {
            icon: <FaBasketballBall/>,
            title: "Performance", 
            info: "Proven to provide peak performance for our athletes"
        }
    ]
    }
    render(){
        return(
            <section className= "services">
                <div className="serivce text-center"> <h1>Our Products</h1></div>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className ="service">
                        <span> {item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
