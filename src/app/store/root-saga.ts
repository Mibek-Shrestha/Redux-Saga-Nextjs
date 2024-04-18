import { all, call } from "redux-saga/effects";
import { movieListSaga } from "./MovieList/movieListSaga";
export default function* rootSaga() {
  yield all([call(movieListSaga)]);
}
