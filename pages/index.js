import {Component} from "react";
import "./styles.scss";




export default class extends Component {
  state = {
    navOpen: false,
  }
  toggleNav = () => {
    this.setState(state => {
      let newState = {};
      newState.navOpen = !state.navOpen;
      return newState;
    })
  }
  render() {
    return (
      <div className={this.state.navOpen ? 'acc-nav--open' : ''}>
         <section className="acc-hero">
         <video
           className="acc-hero--video"
           autoPlay={true}
           muted
           loop
           id="accHeroVideo">
           <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
           Your browser does not support HTML5 video.
         </video>
         <div className="acc-hero--content">
           <img src="/static/hero-logo.svg" alt="Awaken City Church"/>
         </div>
         <button className="acc-nav--button" onClick={this.toggleNav}>
           <span />
           <span />
           <span />
         </button>
         <div className="acc-nav">
          <nav>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Coffee</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Coffee</a></li>
            </ul>
          </nav>
         </div>
       </section>
      </div>
     );
  }
}
