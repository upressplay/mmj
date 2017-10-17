import React, { Component } from 'react';
import img from '../../img/skills.jpg';

class Skills extends Component {

  render() {

    return (
      <div className="Skills">
         <div className="SkillsHolder">
        	   <div className="SkillsBack">
        		  <img src={img} alt="Skills"/>
         	</div> 
        	   <div className="SkillsTitle">
        		  SKILLS
        	   </div>  
         </div>  
         <div className="SkillsDesc">
         Photoshop, Illustrator, Premiere, Final Cut Pro, After Effects, Javascript, SASS, Git, Gulp, Grunt, Node.js, jQuery, JSON, Expression Engine, Wordpress, PHP, Unity3d, C#, ReactJS, ReactVR
         </div>
      </div>
    );
  }
}

export default Skills;