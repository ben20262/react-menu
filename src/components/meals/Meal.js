import React, { Component } from 'react';
 
class Meal extends Component {
    render() { 
        return (
            <div>
                <h4>{this.props.meal.name}</h4>
                <p>${this.props.meal.price}</p>
                <p>{this.props.meal.blurb}</p>
            </div>
        );
    }
}
 
export default Meal;