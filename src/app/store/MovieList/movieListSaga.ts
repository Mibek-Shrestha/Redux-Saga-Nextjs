import { takeLatest, call, all, put, delay } from "redux-saga/effects";
import {
  fetchMovieListStart,
  fetchMovieListFailure,
  fetchMovieListSuccess,
} from "./movieListSlice";
import { AnyAction } from "redux";
import { openAlert } from "../../store/alert/alertSlice";
import { fetchMovieList } from "../ListMovie";
console.log(fetchMovieListStart);
export function* fetchMovieListAsync({ payload }: AnyAction) {
  try {
    console.log("fetchMovieListAsync");
    const { data } = yield call(fetchMovieList());

    yield put(fetchMovieListSuccess(data));
  } catch (err) {
    yield put(
      openAlert({
        message: "Something went wrong. Please try again later.",
        severity: "error",
      })
    );
    yield put(fetchMovieListFailure(err));
  }
}

export function* watchFetchMovieList() {
  yield takeLatest("movieList/fetchMovieListStart", fetchMovieListAsync);
}

export function* movieListSaga() {
  yield all([call(watchFetchMovieList)]);
}
