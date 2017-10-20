import React from 'react';
import TweenMax from 'gsap';

class Nav extends React.Component {

   constructor(props){
      super(props) 
         
         
      this.openNav = this.openNav.bind(this);
      this.state = {
            data: [],
            navOpen:false
         };

         console.log(this.state.navOpen)
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

   render() {


      const navButtons = [  
         {  
           'id':'skills',
           'title':'SKILLS',
           'link':'skills',
           'target':'_self',
           'class':'NavBtn'
         },
         { 
           'id':'portfolio', 
           'title':'PORTFOLIO',
           'link':'portfolio',
           'target':'_self',
           'class':'NavBtn'
         },
         {  
           'id':'resume',
           'title':'RESUME',
           'link':'resume',
           'target':'_self',
           'class':'NavBtn'
         },
         {  
           'id':'blog',
           'title':'BLOG',
           'link':'blog',
           'target':'_self',
           'class':'NavBtn'
         },
         {  
           'id':'contact',
           'title':'CONTACT',
           'link':'contact',
           'target':'_self',
           'class':'NavBtn'
         }
       ];

      const socialBtns = [  
         {  
           'id':'linkedin',
           'title':'LinkedIn',
           'link':'https://www.linkedin.com/in/matthew-m-jones-74862830/',
           'target':'_blank',
           'class':'SocialBtn',
           'icon':'fa fa-linkedin-square'
         },
         {  
           'id':'facebook',
           'title':'Facebook',
           'link':'https://www.facebook.com/matthewmjones',
           'target':'_blank',
           'class':'SocialBtn',
           'icon':'fa fa-facebook-square'
         },
         {  
           'id':'twitter',
           'title':'Twitter',
           'link':'https://twitter.com/upressplay',
           'target':'_blank',
           'class':'SocialBtn',
           'icon':'fa fa-twitter-square'
         }
      ];

      const navItems = navButtons.map((item) =>
         <NavBtn key={item.id} link={item.link} title={item.title} target={item.target} class={item.class} />
      );

      const socialItems = socialBtns.map((item) =>
         <SocialBtn key={item.id} link={item.link} title={item.title} target={item.target} class={item.class} icon={item.icon} />
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



function NavBtn(props) {
  return (
    <a href={props.link} className={props.class} target={props.target}>{props.title}</a>
    );
}

function SocialBtn(props) {
  return (
    <a href={props.link} className={props.class} target={props.target}>
        <span className={props.icon} aria-hidden="true" ></span>
        <span className="ScreenReaderText">{props.title}</span>
    </a>
    );
}

export default Nav;