import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UIState from '../components/shared/UIState';
import MovieList from '../components/movieList/MovieList';
import {
  noResultsFoundLabel,
  noResultsFoundDesc,
  initialStateLabel,
  initialStateDesc,
  errorOccurredLabel,
  errorOccurredDesc,
} from '../config/appConfig';

const MovieListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px 24px 0 24px;

  @media (max-width: 414px) {
    text-align: center;
  }
`;
