import './App.css';
import Application from './container/Application/Application'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'


function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Application />
			</div>
		</BrowserRouter>
	);
}

export default App;
