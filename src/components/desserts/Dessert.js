import React, { Component } from 'react';
 
class Dessert extends Component {
    render() { 
        return (
            <div>
                <h4>{this.props.dessert.name}</h4>
                <p>${this.props.dessert.price}</p>
                <p>{this.props.dessert.blurb}</p>
            </div>
        );
    }
}
 
export default Dessert;