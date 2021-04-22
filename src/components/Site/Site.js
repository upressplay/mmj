import React from 'react';
import './main.scss';
import Nav from '../../components/Nav/Nav.js';
import Header from '../../components/Header/Header.js';
import About from '../../components/About/About.js';
import Skills from '../../components/Skills/Skills.js';
import Portfolio from '../../components/Portfolio/Portfolio.js';
import Contact from '../../components/Contact/Contact.js';


class Site extends React.Component {

	constructor(){
		super() 
      	this.state = {
        	data: [],
         	about:"",
			skills:"",
         	portfolio: [],
         	navBtns:[],
         	socialBtns:[]
      	};
  	}

	componentDidMount() {
      fetch('data/data.json')
  		.then(res => res.json())
  		.then(data => {
  			console.log(data.skills.desc)
  			this.setState({portfolio : data.portfolio});
         this.setState({about : data.about.desc});
		 this.setState({skills : data.skills.desc});
         this.setState({navBtns : data.nav.navBtns});
         this.setState({socialBtns : data.nav.socialBtns});
         console.log("Site render = "+this.state.navBtns);
  		});

      //console.log("Site render = "+this.state.navBtns);
  	}
  	render() {
      
    	return (
      	  <div className="Site">
        	      <Nav navBtns={this.state.navBtns} socialBtns={this.state.socialBtns}/>
        	      <Header />
        	      <Skills data={this.state.skills}/>
        	      <About desc={this.state.about} />
               <Portfolio data={this.state.portfolio} />
               <Contact />
      	  </div>
    );
  }
}

export default Site;

