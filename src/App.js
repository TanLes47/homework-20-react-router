import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';



function App() {
	return (
		<div className="App">
        <Switch>
          <Route exact path={'/'} component={HomePage} />
				</Switch>
		  </div>
	)
}

export default App;
