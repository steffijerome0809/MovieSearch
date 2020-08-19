import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Button } from '@blueprintjs/core';
import styled from 'styled-components';

const SearchField = styled.form`
  width: 450px;

  @media (max-width: 414px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 320px;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    //set state

    this.state = {
      searchQuery: '',
    };
  }

  // gets value from movie search input

  getInputValue = (event) => {
    this.setState(
      {
        searchQuery: event.target.value,
      },
      () => {
        /**
         * When the input field is cleared, show the default state
         */
        if (this.state.searchQuery === '') {
          this.props.getSearchResults(this.state.searchQuery, 1);
        }
      }
    );
  };

  triggerSearchRequest = (e) => {
    e.preventDefault();
    this.props.getSearchResults(this.state.searchQuery, 1);
  };

  // this button when clicked triggers a req to movies api

  searchButton = (
    <Button
      intent={'SUCCESS'}
      className='inputSearchField'
      rightIcon='arrow-right'
      text='Search'
      onClick={this.triggerSearchRequest}
    />
  );

  render() {
    return (
      <SearchField onSubmit={this.triggerSearchRequest}>
        <InputGroup
          large={true}
          leftIcon='search'
          onChange={this.getInputValue}
          placeholder='Type a movie name'
          round={true}
          type='search'
          intent='none'
          rightElement={this.searchButton}
          value={this.state.searchQuery}
        />
      </SearchField>
    );
  }
}

Search.propTypes = {
  getSearchResults: PropTypes.func.isRequired,
};

export default Search;
