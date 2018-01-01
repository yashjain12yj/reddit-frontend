import React from 'react'
import './SearchBar.css'

const SearchBar = () => (
    <div className="searchBar spacer" id="searchBar">
        <form id="search" role="search">
			<input type="text" placeholder="search" tabindex="20" />
			{/* <input type="submit" value="" tabindex="22" /> */}
		</form>
    </div>
);

export default SearchBar