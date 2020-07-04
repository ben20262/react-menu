const apps = [
    {
        name: 'Mozzerella Sticks',
        price: 1,
        blurb: 'A good start to any meal.'
    },
    {
        name: 'Zucchini Strips',
        price: 2,
        blurb: 'Walk the plank with these fried strips of zucchini.'
    },
    {
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