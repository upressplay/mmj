import React, { Component } from 'react';
import img from '../../img/about.jpg';

class About extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
      };
   }
   
   render() {
      

      return (
         <div className="About">
            <div className="AboutHolder">
        	      <div className="AboutBack">
        		     <img src={img} alt="About"/>
        	      </div> 
         	  <div className="AboutTitle">
        		     ABOUT
        	      </div>  
            </div>  
            <div className="AboutDesc">
            {this.props.desc.split('<br/><br/>').map((item, key) => {
              return <span key={key}>{item}<br/><br/></span>
            })}
            </div>
         </div>
      );
   }
}

export default About;