import React from 'react';
import './main.css';
import Nav from '../../components/Nav/Nav.js';
import Header from '../../components/Header/Header.js';
import About from '../../components/About/About.js';
import Skills from '../../components/Skills/Skills.js';
import Portfolio from '../../components/Portfolio/Portfolio.js';

class Site extends React.Component {

	constructor(){
		super() 
      	this.state = {
        	data: [],
         about:"",
         portfolio: []
      	};
  	}

	componentDidMount() {
      fetch('data/data.json')
  		.then(res => res.json())
  		.then(data => {
  			console.log(data.portfolio)
  			this.setState({portfolio : data.portfolio});
         this.setState({about : data.about.desc});
  		});

   console.log("Site render "+this.state.about);
  	}
  	render() {
      
    	return (
      	  <div className="Site">
        	      <Nav />
        	      <Header />
        	      <Skills data={this.state.data}/>
        	      <About desc={this.state.about} />
               <Portfolio data={this.state.portfolio} />
        
      	  </div>
    );
  }
}

export default Site;

