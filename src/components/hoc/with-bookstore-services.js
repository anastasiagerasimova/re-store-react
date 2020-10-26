import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context/index';

const withBookstoreServices = () => (Wrapped) =>{
    return (props) =>{
        return(
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} bookstoreService={bookstoreService} />)
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default withBookstoreServices