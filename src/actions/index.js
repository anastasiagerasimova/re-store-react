const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURL',
        payload: err
    }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested())
    bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
}

const addedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemovedFromCart = (bookId) => {
    return {
      type: 'BOOK_REMOVED_FROM_CART',
      payload: bookId
    };
};

const allBooksRemovedFromCart = (bookId) => {
    return {
      type: 'ALL_BOOKS_REMOVED_FROM_CART',
      payload: bookId
    };
};

export{
    booksLoaded,
    booksRequested,
    booksError,
    fetchBooks,
    addedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
}