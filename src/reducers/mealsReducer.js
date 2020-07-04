const meals = [
    {
        name: 'Filet Mignon',
        price: 25,
        blurb: 'Features an 8oz filet with a baked potato as a side.'
    },
    {
        name: 'Chicken Parmesan',
        price: 17,
        blurb: 'This hand breaded, panfried chicken then baked to allow the cheese and your heart to melt.'
    },
    {
        name: 'Spaghetti',
        price: 15,
        blurb: 'A classic italian dish done right with handmade noodles and a secret family sauce recipe.'
    }
]

export default function mealsReducer(state = meals, action) {
    switch (action.type) {
        case 'ADD_MEAL':
            return state
        case 'DELETE_MEAL':
            return state
        default:
            return state
    }
}