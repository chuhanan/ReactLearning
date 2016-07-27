'use strict'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

var str ={
	"hello":"world"
}
class X_component extends Component{
	render(){
		return(
			<h1>hello{str.hello}</h1>	
		)	
	}
}

	ReactDOM.render(<X_component />,document.getElementById('app'))