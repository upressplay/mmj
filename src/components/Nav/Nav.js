import React, { Component } from 'react';

class Nav extends Component {


  render() {


    var navButtons = [  
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

    var socialBtns = [  
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
      <NavBtn link={item.link} title={item.title} target={item.target} class={item.class} />
    );

    const socialItems = socialBtns.map((item) =>
      <SocialBtn link={item.link} title={item.title} target={item.target} class={item.class} icon={item.icon} />
    );


    return (
      <nav className="Nav">
          <div className="NavLogo">
          MATTHEW M. JONES
          </div>
          <div className="NavButtons">
          {navItems}
          {socialItems}
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