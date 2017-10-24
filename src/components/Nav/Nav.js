import React from 'react';
import { TweenMax, Power2 } from 'gsap'
import 'gsap/src/uncompressed/plugins/ScrollToPlugin';

class Nav extends React.Component {

   constructor(props){
      super(props) 
         
      this.state = {
            navBtns: this.props.navBtns,
            socialBtns: props.socialBtns,
            navOpen:false
         };

      this.openNav = this.openNav.bind(this);
      this.navClick = this.navClick.bind(this);
      
   }

   openNav() {
      console.log("openNav")
      const isNavOpen = this.state.navOpen;
      if(isNavOpen) {

         TweenMax.to('.NavButtons',0.5,{height:0});
         this.setState({'navOpen':false});

      } else {

         TweenMax.set('.NavButtons',{height:'auto'});
         TweenMax.from('.NavButtons',0.5,{height:0});
         this.setState({'navOpen':true});
         
      }
         
   }
   navClick(key, e, target) {
      console.log("navClick key = "+key);
      if(target === "_self") {
         e.preventDefault();
         TweenMax.to(window, 1, {scrollTo:'.'+key, ease: Power2.easeInOut});   
      }
       
   }

   componentDidMount() {
      //this.setState('navBtns', this.props.navBtns)
   }

   render() {

      console.log("this.state.data.navBtns = "+this.props.navBtns);

      const navItems = this.props.navBtns.map((item) =>

         <a key={item.key} href={item.link} className={item.class} target={item.target} onClick={(e) => this.navClick(item.key, e, item.target)}>{item.title}</a>

      );

      const socialItems = this.props.socialBtns.map((item) =>
         <a key={item.key} href={item.link} className={item.class} target={item.target}>
            <span className={item.icon} aria-hidden="true" ></span>
            <span className="ScreenReaderText">{item.title}</span>
         </a>
      );


      return (
         <nav className="Nav">
            
            <div className="NavButtons">
               <div className="NavBtnHolder">{navItems}</div>
               <div className="SocialBtnHolder">{socialItems}</div>
            </div>
            <div className="NavLogo">
               MATTHEW M. JONES
            </div>
            <div className="Menu" onClick={this.openNav}>
               <span className="fa fa-bars" aria-hidden="true" ></span>
               <span className="ScreenReaderText">Menu</span>
            </div>
         </nav>
      );
  }
}


export default Nav;