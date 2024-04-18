/* eslint-disable implicit-arrow-linebreak */
"use client";
import { connect } from "react-redux";

import { fetchMovieListStart } from "src/app/store/MovieList/movieListSlice";

const mapStateToProps = (state) => ({
  movieList: state.movieList,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchMovieListStart: (payload) => dispatch(fetchMovieListStart(payload)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
