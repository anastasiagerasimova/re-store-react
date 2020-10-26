import React from 'react'
import {connect} from 'react-redux'
import {withBookstoreServices} from '../hoc/index'
import BookListItem from '../book-list-item/index'
import {fetchBooks, 
        addedToCart
    }  from '../../actions/index'
import {compose} from '../../utils/index'
import Spinner from '../spinner/index'
import ErrorIndicator from '../error-indicator/index'

import './book-list.css'

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                book={book} 
                                onAddedToCart={() => onAddedToCart(book.id)}
                            />
                            <hr className="item-divider"></hr>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchBooks()
    }

    render(){
        const {books, loading, error, onAddedToCart} = this.props

        if(loading){
            return(
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }

        if(error){
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDipatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(addedToCart(id))
    }
}

// Old realization
// export default withBookstoreServices()(connect(mapStateToProps, mapDipatchToProps)(BookList))
export default compose(
    withBookstoreServices(),
    connect(mapStateToProps, mapDipatchToProps)
)(BookListContainer)
