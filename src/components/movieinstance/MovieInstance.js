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

