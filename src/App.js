import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CounterPage from './pages/CounterPage/CounterPage';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={CounterPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
