import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {urlToken} from '../../api/token';
import {authSlice} from '../auth/authSlice';
import {tokenSlice} from './tokenSlice';

function* getToken() {
  let token = yield localStorage.getItem('Bearer') || '';

  if (token) {
    yield put(tokenSlice.actions.success(token));
    yield put(authSlice.actions.request());
  }

  if (location.pathname.includes('/auth')) {
    try {
      const searchParams = new URLSearchParams(location.search);
      const response = yield axios(`${urlToken}&${searchParams.toString()}`, {
        method: 'POST'
      });

      token = response.data['access_token'];
      yield localStorage.setItem('Bearer', token);
      yield put(tokenSlice.actions.success(token));
      yield put(authSlice.actions.request());
    } catch (error) {
      yield put(tokenSlice.actions.error(error));
    }
  }
}

function* deleteToken() {
  yield localStorage.removeItem('Bearer');
}

export function* watchToken() {
  yield takeLatest(tokenSlice.actions.request.type, getToken);
  yield takeLatest(tokenSlice.actions.delete.type, deleteToken);
}

