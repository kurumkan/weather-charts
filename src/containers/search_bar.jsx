import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state={term:''};	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({
			term: e.target.value
		})
	}

	handleSubmit(e){				
		e.preventDefault();	

		this.props.fetchWeather(this.state.term);

		this.setState({
			term: ''
		});				
	}

	render(){
		return (			
			<form className='input-group' onSubmit={this.handleSubmit}>							
				<input 
					placeholder='Input a city name'
					className='form-control'
					value={this.state.term}
					onChange={this.handleChange}
				/>
				<span className='input-group-btn'>
					<button className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		)
	}
}

//now we can acess to the given function by calling this.props.fetchWeather 
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch)
}

//null - the container doesn't maintain any state
//mapDispatchToProps goes as the 2nd argument
export default connect(null, mapDispatchToProps)(SearchBar)