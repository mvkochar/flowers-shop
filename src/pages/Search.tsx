import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <main>
       <section>
        <div className="search-main">
            <h2 className="search-main-title">Search</h2>
            <form action="" className="search-main-fm d-f">
                <input type="text" name='searchQuery' placeholder='Search our store' />
                <button><img src="images/search.png" alt="search" /></button>
            </form>
        </div>
       </section>
    </main>
  )
}

export default Search