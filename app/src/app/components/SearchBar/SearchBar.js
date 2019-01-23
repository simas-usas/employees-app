import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import SearchButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { setSearchText } from 'actions/filters';

import './searchBar.scss';

const SearchBar = (props) => (
    <div className="search">
        <TextField
            className="textField"
            id="searchField"
            placeholder="Search..."
            type="text"
            onChange={(e) => {
                props.dispatch(setSearchText(e.target.value));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(SearchBar);
