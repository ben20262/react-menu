import React from 'react';
import Drink from './Drink'
 
const Drinks = props => {
    return (
        <div className='Drinks-Component'>
            {props.drinks.map(drink => <Drink drink={drink} />)}
        </div>
    )
}

export default Drinks