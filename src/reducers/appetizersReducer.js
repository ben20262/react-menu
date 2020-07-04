import { v4 as uuid} from 'uuid'

const apps = [
    {
        id: uuid(),
        name: 'Mozzerella Sticks',
        price: 1,
        blurb: 'A good start to any meal.'
    },
    {
        id: uuid(),
        name: 'Zucchini Strips',
        price: 2,
        blurb: 'Walk the plank with these fried strips of zucchini.'
    },
    {
        id: uuid(),
        name: 'Wings',
        price: 4,
        blurb: 'Juicy, delicious chicken wings.'
    }
]

export default function appetizersReducer(state = apps, action) {
    switch (action.type) {
        case 'ADD_APPETIZER':
            return state
        case 'DELETE_APPETIZER':
            return state
        default:
            return state
    }
}