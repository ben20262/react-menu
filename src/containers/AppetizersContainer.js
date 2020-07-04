import React, { Component } from 'react';
import { connect } from 'react-redux'
import Appetizers from '../components/appetizers/Appetizers'
 
class AppetizersContainer extends Component {
    render() { 
        return (
            <div className='Appetizers-Container'>
                <h2>Appetizers</h2>
                <Appetizers apps={this.props.apps}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        apps: state.appetizers
    }
}
 
export default connect(mapStateToProps)(AppetizersContainer)