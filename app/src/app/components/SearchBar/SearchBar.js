import React from 'react';

import TextField from '@material-ui/core/TextField';

import './searchBar.scss';

const SearchBar = (props) => (
    <div className="search">
        <TextField
            className="text-field"
            id="searchField"
            placeholder="Search..."
            type="text"
            onChange={(e) => {
                props.setSearchText(e.target.value);
            }}
        />
    </div>
);


export default SearchBar;
