import React, { Component } from "react"
import SimpleSlider from "./simpleSlider"
import MustWatch from "./mustWatch"
import Footer from "./footer"

class Shows extends Component {
	render(){
		return (
		<div>
    	<SimpleSlider />
    	<MustWatch/>
    	<Footer/>
  		</div>
		)
	}
}
export default Shows;