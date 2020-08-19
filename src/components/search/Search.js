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
}
