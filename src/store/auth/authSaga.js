import {put, select, takeLatest} from 'redux-saga/effects';
import {authSlice} from './authSlice';
import axios from 'axios';
import {API_URL} from '../../api/const';

function* request() {
  try {
    const token = yield select((store) => store.token.token);

    if (token) {
      const response = yield axios(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      yield put(authSlice.actions.success(response.data));
    }
  } catch (error) {
    yield put(authSlice.actions.error(error));
  }
}

function* logout() {
  yield localStorage.removeItem('Bearer');
}

export function* watchAuth() {
  yield takeLatest(authSlice.actions.request.type, request);
  yield takeLatest(authSlice.actions.logout.type, logout);
}
