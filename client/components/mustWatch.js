import React, { Component } from "react"
import SimpleSlider from "./simpleSlider"

class MustWatch extends Component {
	 constructor() {
      super()
      this.state = {
          // list: [],
           items: [
           {
                id: 1,
                label: 'Kaun Banega Crorepati - Season 9',
                image: "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg"
            },
            {
                id: 2,
                label: 'Kaun Banega Crorepati - Season 8',
                image: "https://www.carmudi.com.bd/journal/wp-content/uploads/2015/04/Lykan-HyperSport1.jpg"
            },
            {
                id: 3,
                label: 'Kaun Banega Crorepati - Season 7',
                image: "https://sporteology.com/wp-content/uploads/2017/08/wm_homepage_slide_01-1024x683.jpg"
            },
            {
                id: 4,
                label: 'Kaun Banega Crorepati - Season 6',
                image: "https://www.carmudi.com.bd/journal/wp-content/uploads/2015/04/Lykan-HyperSport1.jpg"
            },
            {
                id: 5,
                label: 'Kaun Banega Crorepati - Season 5',
                image: "https://s1.cdn.autoevolution.com/images/news/gallery/fast-and-furious-7-will-spawn-eight-special-edition-cars-in-forza-horizon-2-video-photo-gallery_7.jpg"
            }
        ]
      };
  }
	render(){
		return (
		<div>
    	 <div className="main-content">
		    <h2 className="mb-0">Must Watch</h2>
		    <section className="show-sliders">
		      <div className="js-slider">
		        <div className="js-mover">
		          {this.state.items.map((item,i) => (
		          	<figure>
			            <li className="_inline" key={i}>
			          	<div className="show-bg">
			              <img src={item.image} height="157" width="220" />
			            </div>
			            <div className="show-info">{item.label}</div>
			            </li>
		            </figure>
		          ))}
		        </div>

		        <button className="js-prev"></button>
		        <button className="js-next"></button>
		      </div>
		    </section>

		  </div>
  		</div>
		)
	}
}
export default MustWatch;