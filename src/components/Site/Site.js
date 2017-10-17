import React, { Component } from 'react';
import './main.css';
import Nav from '../../components/Nav/Nav.js';
import Header from '../../components/Header/Header.js';
import About from '../../components/About/About.js';
import Skills from '../../components/Skills/Skills.js';
import Portfolio from '../../components/Portfolio/Portfolio.js';

class Site extends Component {

	constructor(){
		super() 
      	this.state = {
        	data: []
      	};
  	}

	componentDidMount() {
      fetch('data/data.json')
  		.then(res => res.json())
  		.then(data => {
  			//console.log(data)
  			this.setState({data : data});
  		});


  	}
  	render() {
    	return (
      	<div className="Site">
        	<Nav />
        	<Header />
        	<Skills />
        	<About />
       	 	<Portfolio data={this.state.data.portfolio} />
        
      	</div>
    );
  }
}

export default Site;
