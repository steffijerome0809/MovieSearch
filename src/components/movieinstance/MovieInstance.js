import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import moment from 'moment';
import languages from '../../config/languages';
import { POSTER_BASE_PATH } from '../../config/constants';
import { noDesc, noDate } from '../../config/appConfig';
import utils from '../../utils/utils';

const { getLanguageName } = utils;

/**
 * Creates MovieTitle component with
 * following styles using styled-components.
 */
export const MovieTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  font-variant-caps: all-petite-caps;
`;

export const MovieOverview = styled.div`
  line-height: 1.5;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  padding: 10px 0px 12px 0px;
  font-weight: 700;
  font-size: 14px;
  color: rgba(66, 82, 110, 0.48);

  @media (max-width: 414px) {
    padding: 16px 0px 16px 0px;
  }
`;

export const AdditionalInfoItem = styled.div`
  padding-right: 40px;
  .infoItemIcon {
    padding-right: 10px;
  }

  @media (max-width: 414px) {
    &:last-child {
      padding-right: 0;
    }
  }
`;
