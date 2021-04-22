
import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { getBooks, getBooksFail, getBooksSuccess } from '../../actions/book'
import { BookList } from './BookList'
import {getBookList} from '../../api/books'

class _BookListContainer extends PureComponent {
  render() {
    return (
      this.props.loading ?
      <div>LOADING...</div> :
      <BookList 
        books={this.props.books}
      />
    )
  }

  componentDidMount() {
    console.log('componentDidMount', this.props)
    this.props.getBooks()

    setTimeout(() => {
      this.props.getBooksSuccess(getBookList())
    }, 5000)
  }
}

const mapStateToProps = (state, owns) => {

  console.log(owns)
  return {
    books: state.books.list,
    loading: state.books.loading,
    error: state.books.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getBooks()),
    getBooksSuccess: (books) => dispatch(getBooksSuccess(books)),
    getBooksFail: (error) => dispatch(getBooksFail(error))
  }
}

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BookListContainer)

/**
 export const BookListContainer = connect(
  null,
  mapDispatchToProps
)(_BookListContainer)


 export const BookListContainer = connect(
  mapStateToProps
)(_BookListContainer)
 */