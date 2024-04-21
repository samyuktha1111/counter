import React from 'react';
import { useState } from 'react';
import Count from './components/Count';
import './App.css';
import Users from './components/Users';
import { Provider } from 'react-redux';
import { store } from './components/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
	const [num, setNum] = useState<number>(1);
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/user" element={<Users />} />
						<Route path="/" element={<Count num={num} setNum={setNum} />} />
					</Routes>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
