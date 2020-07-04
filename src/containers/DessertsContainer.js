import React, { Component } from 'react';
import { connect } from 'react-redux'
import Desserts from '../components/desserts/Desserts'
 
class DessertsContainer extends Component {
    render() { 
        return (
            <div className='Desserts-Container'>
                <h2>Desserts</h2>
                <Desserts desserts={this.props.desserts} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        desserts: state.desserts
    }
}
 
export default connect(mapStateToProps)(DessertsContainer);