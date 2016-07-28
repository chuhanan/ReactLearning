'use strict'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Xcomponent extends Component{
	render(){
		return(
			<h1>hello react and webpack</h1>	
		)	
	}
}

ReactDOM.render(<Xcomponent />,document.getElementById('app'))