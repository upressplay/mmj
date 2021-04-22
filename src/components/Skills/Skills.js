import React, { Component } from 'react';
import img from '../../img/skills.jpg';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: [],
    };
 }
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
          {this.props.data}
         </div>
      </div>
    );
  }
}

export default Skills;