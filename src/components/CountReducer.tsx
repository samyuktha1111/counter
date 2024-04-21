import { PostProps } from '../models/user';

const initialState = {
	value: 0,
	users: [],
};

type StateProps = {
	value: number;
	users: PostProps[];
};
export type UpdateAction = {
	type: 'INCREMENT_SUCCESS' | 'DECREMENT_SUCCESS';
	payload: number;
	id: number;
};
export type ResetAction = {
	type: 'RESET_SUCCESS';
};
type UserAction = {
	type: 'GET_USERS_SUCCESS' | 'GET_USERS_FAILURE';
	payload: PostProps[];
	message: any;
};
type ActionProps1 = {
	type: 'GET_USERS' | 'INCREMENT' | 'DECREMENT' | 'RESET';
};
export type ActionProps =
	| UpdateAction
	| ResetAction
	| UserAction
	| ActionProps1;

const CountReducer = (
	state: StateProps = initialState,
	action: ActionProps
) => {
	switch (action.type) {
		case 'INCREMENT_SUCCESS': {
			console.log('abc', Number(state.value) + Number(action.payload));
			const num1 = Number(state.value) + Number(action.payload);
			return { value: num1 };
		}
		case 'DECREMENT_SUCCESS': {
			console.log('abc', Number(state.value) - Number(action.payload));
			const num1 = Number(state.value) - Number(action.payload);
			return { value: num1 };
		}
		case 'RESET_SUCCESS':
			return initialState;
		case 'GET_USERS_SUCCESS':
			return { ...state, users: action.payload };
		case 'GET_USERS_FAILURE':
			return { ...state, message: action.message };

		default:
			return state;
	}
};
export default CountReducer;
