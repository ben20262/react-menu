import React from 'react'
import Appetizer from './Appetizer'

const Appetizers = props => {
    return (
        <div className='Appetizers-Component'>
            {props.apps.map(app => <Appetizer app={app} key={app.id} />)}
        </div>
    )
}

export default Appetizers