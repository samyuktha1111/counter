import React, { useEffect } from 'react';
import { PostProps } from '../models/user';
import { useAppSelector, useAppDispatch } from './hooks';

const Users = () => {
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch({ type: 'GET_USERS' });
	},[]);
	const users = useAppSelector((state: any) => state?.counter.users);
	console.log('def', users);
	return (
		<div>
			{
				users &&
				users.map((user: PostProps) => (
					<div key={user.id}>
						{user.id}.{user.title}
					</div>
				))}
		</div>
	);
};

export default Users;
