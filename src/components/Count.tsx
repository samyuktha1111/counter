import React from 'react';

import { useAppSelector, useAppDispatch } from './hooks';
import { useNavigate } from 'react-router-dom';
type CountProps = {
	num: number;
	setNum: React.Dispatch<React.SetStateAction<number>>;
};

const Count = ({ num, setNum }: CountProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const count1 = useAppSelector((state: any) => state.counter.value);
	console.log(count1);
	const handleChange = (e: any) => {
		setNum(e.target.value);
	};
	const clickHandler = () => {
		navigate('/user');
	};

	return (
		<>
			<div>{count1}</div>

			<input type="number" name="number" onChange={(e) => handleChange(e)} />

			<button onClick={() => dispatch({ type: 'INCREMENT', id: num })}>
				INCREMENT
			</button>
			<button onClick={() => dispatch({ type: 'DECREMENT', id: num })}>
				DECREMENT
			</button>
			<button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
			<button onClick={clickHandler}>USERS</button>
		</>
	);
};

export default Count;
