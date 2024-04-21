import { call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { UpdateAction, ResetAction } from './CountReducer';
import { PostProps } from '../models/user';

const getUsers1 = () => {
	return axios.get<PostProps[]>('https://jsonplaceholder.typicode.com/posts');
};
export function* getUsers(): any {
	try {
		const response = yield call(getUsers1);
		console.log('abc', response);
		yield put({ type: 'GET_USERS_SUCCESS', payload: response.data });
	} catch (error: any) {
		yield put({ type: 'GET_USERS_FAILURE', message: error.msg });
	}
}
export function* incNum(action: UpdateAction): any {
	yield put({ type: 'INCREMENT_SUCCESS', payload: action.id });
}
export function* decNum(action: UpdateAction): any {
	yield put({ type: 'DECREMENT_SUCCESS', payload: action.id });
}
export function* resetNum(action: ResetAction): any {
	yield put({ type: 'RESET_SUCCESS' });
}
export function* watchUser(): any {
	yield all([
		yield takeLatest('GET_USERS', getUsers),
		yield takeEvery('INCREMENT', incNum),
		yield takeEvery('DECREMENT', decNum),
		yield takeEvery('RESET', resetNum),
	]);
}
