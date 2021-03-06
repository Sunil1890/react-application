import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Shows from "./shows"
import Movies from "./movies"
import Sports from "./sports"
import Livkids from "./livkids"
import '../scss/navbar.scss'

class App extends Component {
	render(){
		return (
			<div>
			<Router>
   		 <div className="nav-bar">
 		  	<nav>
		      <menu>
		        <li><Link to="/">Shows</Link></li>
		        <li><Link to="/about">Movies</Link></li>
		        <li><Link to="/sports">Sports</Link></li>
		        <li><Link to="/livkids">Liv Kids</Link></li>
			      </menu>
	    	</nav>

	      <Route exact path="/" component={Shows}/>
	      <Route path="/about" component={Movies}/>
	      <Route path="/sports" component={Sports}/>
	      <Route path="/livkids" component={Livkids}/>
   		</div>
 			</Router>

		</div>
		)
	}

}
export default App

