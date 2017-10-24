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

   }
   sort(key) {

      console.log("sort = "+key);

      var sortArray = [];

      this.props.data.map(function(item, i){

         var istype = false;
         
         item.type.map(function(sorts, i){
            console.log(sorts)
            if(sorts === key) {
               istype = true;   
            }

         });
         console.log("istype = "+istype);

         if(istype || key === 'all') {
            sortArray.push(item);
         }
         TweenMax.to('#'+item.key, 0.25, { autoAlpha:0, display:'none' , overwrite:2});
         return;
      });
      
      var delay = .55;

      sortArray.map((item) => {
         //var thisItem = item.key;
         //this.refs[item.key]  .style.display = "inline-block";
         TweenMax.to('#'+item.key, 0.5,{ delay:delay, autoAlpha:1, display:'inline-block', overwrite:2});
         delay = delay + .1;
         console.log("delay = "+delay);
         
      });


   }

   render() {
       
      const portItems = this.props.data.map((item) =>
         <PortItem ref={item.key} id={item.key} url={item.url} title={item.title} desc={item.desc} thumb={item.thumb} tools={item.tools}/>
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
                     <div className="PortfolioBtn" onClick={() => { this.sort('web') }}>
                        WEB
                     </div>
                     <div className="PortfolioBtn" onClick={() => { this.sort('games') }}>
                        GAMES
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