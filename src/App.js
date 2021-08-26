import './App.css';
import { Switch, Route, NavLink, } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostsPage from './components/AllPostsPage';
import PhotosPage from './components/PhotosPage';
import ContactsPage from './components/ContactsPage';
import NotFound from './components/NotFound';



function App() {
	return (
	  <div className="App">
		<nav className="header-1">
		  	<NavLink exact to="/" activeClassName="selected" className="link">Home</NavLink>
			<NavLink to="/PostsPage" activeClassName="selected" className="link">Posts</NavLink>
			<NavLink to="/PhotosPage" activeClassName="selected" className="link">Photos</NavLink>
			<NavLink to="/ContactsPage" activeClassName="selected" className="link">Contacts</NavLink>
		</nav>
		<Switch>
		  <Route exact path="/" component={HomePage} />
		  <Route path="/postsPage" component={PostsPage} />
          <Route path="/photosPage" component={PhotosPage} />
          <Route path="/contactsPage" component={ContactsPage} />
		  <Route path="*" component={NotFound} />
		</Switch>
	  </div>
	);
  }
  
  export default App;
  