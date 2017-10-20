import React from 'react';
import img from '../../img/portfolio.jpg';
import TweenMax from 'gsap';

class Portfolio extends React.Component {
   
   constructor(props){
      super(props) 
      this.state = {
         data: props
      };
      console.log("Portfolio "+this.state.data);

   }
   componentDidMount() {

      //console.log("Portfolio "+this.props.data);
         
      

   }
   sort(key) {
      console.log("sort = "+key);
         var sortItems = this.props.data.map((item) =>
         


         console.log(item.type)
      );

      var items = this.props.data.map(function(item, i){

         if(item.type === key || key === 'all') {
            TweenMax.to('#'+item.key, 0.5,{ autoAlpha:1, display:'inline-block' });
         } else {
            TweenMax.to('#'+item.key, 0.5, { autoAlpha:0, display:'none' });
         }

      });
   }
   divDisplay(id,display) {

   }
   render() {
      
       
      const portItems = this.props.data.map((item) =>
         <PortItem key={item.key} id={item.key} url={item.url} title={item.title} desc={item.desc} thumb={item.thumb} tools={item.tools}/>
      );
      return (
         <div className="Portfolio">
            <div className="PortfolioHolder">
           	   <div className="PortfolioBack">
           		  <img src={img} alt="Portfolio Header"/>
            	</div> 
           	   <div className="PortfolioTitle">
                  PORTFOLIO 
                  <div className="PortfolioBtns">
                     <div className="PortfolioBtn" onClick={() => { this.sort('all') }}>
                        ALL
                     </div>
                     <div className="PortfolioBtn" onClick={() => { this.sort('dev') }}>
                        WEB
                     </div>
                     <div className="PortfolioBtn" onClick={() => { this.sort('vr') }}>
                        VR
                     </div>
                     <div className="PortfolioBtn" onClick={() => { this.sort('design') }}>
                        DESIGN
                     </div>
                     <div className="PortfolioBtn" onClick={() => { this.sort('video') }}>
                        VIDEO
                     </div>
                  </div>
           	   </div>  
            </div>  
            <div className="PortfolioContent">
               {portItems}
             </div>
         </div>
      );
   }
}

function PortItem(props) {
   return (
      <a href={props.url} target="_blank">
         <div id={props.id} className="PortItem">
            <img src={props.thumb} alt={props.title}/>
            <div className="PortInfo">
               <div className="PortTitle">
                  {props.title}
               </div>
               <div className="PortDesc">
                  {props.desc}
               </div>
               <div className="PortTools">
                  {props.tools}
               </div>
            </div>
         </div>
      </a>
    );
}

export default Portfolio;