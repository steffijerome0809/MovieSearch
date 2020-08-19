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
}
