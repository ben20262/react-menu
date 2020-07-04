import { combineReducers } from 'redux'
import appetizersReducer from './appetizersReducer'
import dessertsReducer from './dessertsReducer'
import drinksReducer from './drinksReducer'
import mealsReducer from './mealsReducer'

const rootReducer = combineReducers({
    appetizers: appetizersReducer,
    desserts: dessertsReducer,
    drinks: drinksReducer,
    meals: mealsReducer
})

export default rootReducer