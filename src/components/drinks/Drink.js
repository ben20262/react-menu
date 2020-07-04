import React, { Component } from 'react';
 
class Drink extends Component {
    render() { 
        return (
            <div>
                <h4>{this.props.drink.name}</h4>
                <p>${this.props.drink.price}</p>
                <p>{this.props.drink.blurb}</p>
            </div>
        );
    }
}
 
export default Drink;