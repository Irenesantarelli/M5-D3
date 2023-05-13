import React, { useState, useEffect } from 'react'
import SingleBook from './SingleBook';
import SearchBar from './SearchBar';

const BookList = () => {
    const [books, setBooks] = useState([])
    const [filterBooks, setFilterBooks] = useState([])
    //console.log(books);
    async function getBooks() {
        const data = await fetch("https://epibooks.onrender.com/")
        const response = await data.json()
        setBooks(response)
        setFilterBooks(response)

    }
    useEffect(() => {
        getBooks()
    }, [])
    return (
        <>
        <SearchBar books={books} funzioneCheScrive = {setFilterBooks}/>

        {filterBooks && filterBooks.map((item)=> {
            return(
                <SingleBook
                img = {item.img}
                title = {item.title}
                price = {item.price}
                category = {item.category}
                asin = {item.asin}
                />
            )
        })}
        </>
    )
}

export default BookList