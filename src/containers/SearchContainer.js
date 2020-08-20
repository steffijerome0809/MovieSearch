import React from "react";
import { Spinner } from "@blueprintjs/core";
import styled from "styled-components";

import Search from "../components/search/Search";
import MovieListContainer from "./MovieListContainer";
import getData from "../api";
import { API_PATH } from "../config/constants";
import { homepageTitle } from "../config/appConfig";

export const SearchSection = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 4rem;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
`;

export const SmallHeading = styled.h1`
  color: #fff;
  margin-bottom: 38px;
`;

const SpinnerWrapper = styled.div`
  margin: 50px;
`;
