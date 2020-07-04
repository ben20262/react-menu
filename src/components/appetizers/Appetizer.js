import React, { Component } from 'react'

class Appetizer extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.app.name}</h4>
                <p>${this.props.app.price}</p>
                <p>{this.props.app.blurb}</p>
            </div>
        )
    }
}

export default Appetizer
