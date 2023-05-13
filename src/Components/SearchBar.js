import React, { useEffect, useState } from 'react'

const SearchBar = ({ funzioneCheScrive, books }) => {
    const [searchTerm, setSearchTerm] = useState("")
    //console.log(searchTerm);
    const filterBooks = () => {
        funzioneCheScrive(books.filter(book => book.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())))

    }

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }
    function handleClear() {
        setSearchTerm('')
        handleChange({ target: { value: '' } })
    }
    useEffect(() => {
        filterBooks()
    }, [searchTerm])
    return (
        <div>

            <input type='text' value={searchTerm} onInput={handleChange} />
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default SearchBar