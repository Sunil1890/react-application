import React, {Component} from "react";

class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <div className="footer-content">
          <ul className="list-unstyled pull-left">
            <li><b>© 2017 Sony Pictures Networks India Pvt. Ltd.</b></li>
          </ul>
          <ul className="list-unstyled pull-right">
            <li><a href="" className="white-text-color">Frequently Asked Questions</a></li>
            <li><a href="" className="white-text-color">Terms of Use</a></li>
            <li><a href="" className="white-text-color">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>

    )
  }
}

export default Footer;