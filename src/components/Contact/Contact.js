import React, { Component } from 'react';
import img from '../../img/contact.jpg';

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
      };
   }
   
   render() {
      

      return (
         <div className="Contact">
            <div className="ContactHolder">
               <div className="ContactBack">
                  <img src={img} alt="Contact"/>
        	      </div> 
         	   <div className="ContactTitle">
                  CONTACT
        	      </div>  
            </div>  
            <div className="ContactInfo">
               <div className="ContactName">
                  MATTHEW M. JONES
               </div>           
               <a href="mailto:matthew@matthewmjones.com">matthew@matthewmjones.com</a><br/>
               773-398-3653
            </div>
         </div>
      );
   }
}

export default Contact;