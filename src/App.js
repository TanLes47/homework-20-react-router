import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import PostsPage from './components/PostsPage';
import PhotosPage from './components/PhotosPage';
import ContactsPage from './components/ContactsPage';
//import './components/styles';

const HomePage = () => {
    return <div>
			<h1 className="header-1">Welcome to Venice</h1>
			<a href="" target="_blank" rel="noreferrer" className="title_link">
				<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripzaza.com%2Fru%2Fdestinations%2Fluchshie-dostoprimechatelnosti-venetsii%2F&psig=AOvVaw05HQfmyPTAANemI004uyOQ&ust=1629812937496000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiU3Lukx_ICFQAAAAAdAAAAABAq" alt="" className="img-page"></img>
			</a>
		</div>
};


function App() {
	return (
	  <div className="App">
		<nav>
		  	<NavLink exact to="/" activeClassName="selected" className="link">Home</NavLink>
			<NavLink to="/" activeClassName="selected" className="link">Posts</NavLink>
			<NavLink to="/" activeClassName="selected" className="link">Photos</NavLink>
			<NavLink to="/" activeClassName="selected" className="link">Contacts</NavLink>
		</nav>
		<Switch>
		  <Route exact path="/" component={HomePage} />
		  <Route path="/publications" component={PostsPage} />
          <Route path="/photos" component={PhotosPage} />
          <Route path="/contacts" component={ContactsPage} />
		</Switch>
	  </div>
	);
  }
  
  export default App;
  