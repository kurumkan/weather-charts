import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state={term:''};	
	}

	render(){
		return (
			<form className='input-group'>
				<input 
					placeholder='Input a city name'
				/>
				<span className='input-group-btn'>
					<button className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		)
	}
}