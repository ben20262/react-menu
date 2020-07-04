import React, { Component } from 'react';
import { connect } from 'react-redux'
import Meals from '../components/meals/Meals'
 
class MealsContainer extends Component {
    render() { 
        return (
            <div className='Meals-Container'>
                <h2>Meals</h2>
                <Meals meals={this.props.meals}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        meals: state.meals
    }
}
 
export default connect(mapStateToProps)(MealsContainer);