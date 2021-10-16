import React from 'react'
import './SearchBox.css'

const SearchBox=({setSearchField})=>{
    return(
        <div className=''>
            <input
            onChange={(e)=> setSearchField(e.target.value)}
            className='searchBox'
             type='Search'
              placeholder='Search'/>
        </div>
    );
}
export default SearchBox; 