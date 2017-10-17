import React, { Component } from 'react';
import img from '../../img/about.jpg';

class About extends Component {

  render() {

    return (
      <header className="About">
        <div className="AboutHolder">
        	<div className="AboutBack">
        		<img src={img} alt="About"/>
        	</div> 
        	<div className="AboutTitle">
        		ABOUT
        	</div>  
        </div>  
        <div className="AboutDesc">
        Matthew was born and raised in Woodhaven, Michigan, 20 miles south of Detroit. He spent his days drawing comic book characters, creating haunted house tours through his friends basements and acting in the Woodhaven High School's theater program. Matthew attended Michigan State University earning a B.A. in Advertising, where he concentrated on graphic design and marketing. After graduation Matthew moved to Chicago, where he worked as a designer and developer.<br/><br/>In 1999, he entered the Film and Video Program at Columbia College in Chicago, where he graduated with honors. During that time he founded uPressplay, an interactive website for independent artists to showcase their films and videos. Matthew also produced many of his own work, which he also showcased in montly screenings. uPressplay became the launching pad for many successes including, Stay Dead, Two Days in Limbo, Palooka, Roscoe Village, Sour Krauts, The Art of Pain, Farewell Darkness and Camel Town: The Musical.<br/><br/>uPressplay has produced over 25 Official Film Festival Selections and winning Best Dramatic Short at the Michigan Independent and NY International Film Festivals for Two Days in Limbo. Best Feature Film at the Delray Beach and Drake International Film Festivals for Farewell Darkness. And Audience Choice Award at the Sunscreen Film Festival for The Art of Pain. The comedy musical short, Camel Town, was an official selection of the Sunscreen Film Festival and also won the Audience Choice Award at the Chicago International Reel Shorts Film Festival.<br/><br/>Matthew moved to Los Angeles in 2011, working in entertainment industry as a designer, developer and editor. He also has written 2 feature lenght scripts and has produced seversl web videos and short films. Recently he won a W3 Best of Show award for his work on the How to Train Your Dragon franchise site and online card game.
        </div>
      </header>

    );
  }
}

export default About;