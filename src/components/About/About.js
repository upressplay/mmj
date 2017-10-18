import React, { Component } from 'react';
import img from '../../img/about.jpg';

class About extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
      };

   }
   componentDidMount() {
      //this.setState({data : props.data});
      console.log("props = "+this.props)

   }
   render() {
      
      //const desc = this.props.data.desc;
      //console.log("desc "+desc);
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

            </div>
         </header>
      );
   }
}

export default About;