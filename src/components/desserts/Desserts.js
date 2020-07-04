import React from 'react';
import Dessert from './Dessert'
 
const Desserts = props => {
    return (
        <div className='Desserts-Component'>
            {props.desserts.map(dessert => <Dessert dessert={dessert} />)}
        </div>
    )
}
 
export default Desserts;