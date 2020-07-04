const drinks = [
    {
        name: 'Water',
        price: 0,
        blurb: 'This cool drink will cool you down.'
    },
    {
        name: 'Milk',
        price: 1,
        blurb: 'This might cool you down.'
    },
    {
        name: 'Beer',
        price: 4,
        blurb: 'A satisfying drink after a long day.'
    }
]

export default function drinksReducer(state = drinks, action) {
    switch (action.type) {
        case 'ADD_DRINK':
            return state
        case 'DELETE_DRINK':
            return state
        default:
            return state
    }
}