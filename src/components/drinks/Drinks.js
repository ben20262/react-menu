import React from 'react';
import Drink from './Drink'
 
const Drinks = props => {
    return (
        <div className='Drinks-Component'>
            {props.drinks.map(drink => <Drink drink={drink} key={drink.id} />)}
        </div>
    )
}

export default Drinks