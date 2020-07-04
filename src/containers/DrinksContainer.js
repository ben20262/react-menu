import React, { Component } from 'react';
import { connect } from 'react-redux'
import Drinks from '../components/drinks/Drinks'
 
class DrinksContainer extends Component {
    render() { 
        return (
            <div className='Drinks-Container'>
                <h2>Drinks</h2>
                <Drinks drinks={this.props.drinks} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks
    }
}
 
export default connect(mapStateToProps)(DrinksContainer);