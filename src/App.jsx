import search from './search.svg';
import './App.css';
import Book from './Book';
import Spinner from './Spinner';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const APT_URL = 'https://api.itbook.store/1.0/search';

function App() {

  const [books, setBooks] = useState([]);
  const [searchPattern, setSearchPattern] = useState('react');
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  const searchBooks = async () => {
    setSpinnerVisible(true);
    const response = await fetch(`${APT_URL}/${searchPattern}/${page}`);
    const data = await response.json();
    setSpinnerVisible(false);
    setBooks(data.books);
    setTotalElements(Number(data.total));
  }

  useEffect(() => {
    searchBooks();
  },[]);

  useEffect(() => {
    searchBooks();
  },[page]);

  const pageChanged = (newPage) => {
    setPage(newPage);
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      searchEnter();
    }
  }

  const searchEnter = () => {
    setPage(1);
  }
  
  return (
    <div className='container'>
      <div className='container'>
      <h1>IT Book Store</h1>
      <div className='search input-group'>
        <input type='search' className='form-control form-input' value={searchPattern}
          placeholder='Search for books'
          onChange={(e) => setSearchPattern(e.target.value)}
          onKeyDown={(e)=> onEnter(e)}
          />
          <img src={search} alt='search' 
            onClick={() => searchPattern === '' ? {} : searchEnter()}/>
      </div>
      </div>
      <div className='container'>
        <Spinner visible={spinnerVisible}/>
        <div className='row row-cols-lg-5 row-cols-md-2 row-cols-sm-2 row-cols-xs-1 justify-content-center mt-3 mb-3'>
          
            {
              books?.length > 0 
              ? (
                books.map((book) => (
                  <div key={book.isbn13} className='col'>
                  <Book  book={book} />
                  </div>
                ))
              ): (
                <h2>No Books Found !</h2>
              )

            }

        </div>
        <div className='pagination-row'>
          <PaginationControl
            page={page}
            between={4}
            total={totalElements}
            limit={10}
            changePage={(p) => {
              pageChanged(p);
            }}
            ellipsis={1}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
