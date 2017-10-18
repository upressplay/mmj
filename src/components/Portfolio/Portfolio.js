import React, { Component } from 'react';
import img from '../../img/portfolio.jpg';

class Portfolio extends Component {
   
   constructor(){
      super() 
         this.state = {
         data: [],
         portItems: []
         };
   }
   componentDidMount() {

      


   }
   render() {
      
      
      console.log("Portfolio "+this.props.data);
      if(this.props.data != undefined) {

      this.state.portItems = this.props.data.map((item) =>
         <PortItem key={item.key} url={item.url} title={item.title} thumb={item.thumb} />
       );    
      }
       return (
         <div className="Portfolio">
            <div className="PortfolioHolder">
           	   <div className="PortfolioBack">
           		  <img src={img} alt="Portfolio Header"/>
            	</div> 
           	   <div className="PortfolioTitle">
           		  PORTFOLIO
           	   </div>  
            </div>  
            <div className="PortfolioContent">
               {this.state.portItems}
             </div>
         </div>
       );
   }
}
function PortItem(props) {
  return (
    <a href={props.url} target={props.target}>
      <div id={props.key} className="PortItem">
        <img src={props.thumb} alt={props.title}/>
        <div className="PortInfo">
          <div className="PortTitle">
            {props.title}
          </div>
          </div>
      </div>
    </a>
    );
}

export default Portfolio;