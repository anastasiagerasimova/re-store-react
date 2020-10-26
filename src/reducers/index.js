const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

const updateOrderTotal = (cartItems) => {
    return cartItems.reduce((accum, item) => {
        return accum+=item.price
    }, 0)
}

const updateCartItem = (book, item={}, index, quantity) => {
    const {id=book.id, title=book.title, count=0, price=0} = item
        return {
            id,
            title,
            count: count + quantity,
            price: price + quantity*book.price
        }   
}

const updateCartItems = (cartItems, item, index) => {
    if(item.count === 0){
        return [
            ...cartItems.slice(0, index ),
            ...cartItems.slice(index  + 1)
        ]
    }

    if(index === -1){
        return [
            ...cartItems,
            item,
        ]
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index  + 1)
    ]

}

const updateOrder = (state, bookId, quantity) => {
    const book = state.books.find((book) => book.id === bookId)
    const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === bookId)
    const item = state.cartItems[itemIndex]

    const newItem = updateCartItem(book, item, itemIndex, quantity)
    const cartItems = updateCartItems(state.cartItems, newItem, itemIndex)

    return {
        ...state,
        cartItems: cartItems,
        orderTotal: updateOrderTotal(cartItems)
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURL':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const bookId = action.payload
            const item = state.cartItems.find((book) => book.id === bookId)
            return updateOrder(state, action.payload, -item.count)
        default:
        return state
    }
}

export default reducer