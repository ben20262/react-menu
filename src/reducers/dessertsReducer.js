import { v4 as uuid} from 'uuid'

const desserts = [
    {
        id: uuid(),
        name: 'Ice Cream',
        price: 2,
        blurb: 'The end to an summer day is imcomplete without this tasty treat.'
    },
    {
        id: uuid(),
        name: 'Birthday Cake',
        price: 10,
        blurb: 'A dessert for a special occasion please let us know ahead of time for special requests.'
    }
]

export default function dessertsReducer(state = desserts, action) {
    switch (action.type) {
        case 'ADD_DESSERT':
            return state
        case 'DELETE_DESSERT':
            return state
        default:
            return state
    }
}