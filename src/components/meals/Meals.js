import React from 'react'
import Meal from './Meal'

const Meals = props => {
    return (
        <div className='Meals-Component'>
            {props.meals.map(meal => <Meal meal={meal} />)}
        </div>
    )
}

export default Meals