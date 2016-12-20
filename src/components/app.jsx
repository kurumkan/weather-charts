//wrapper component
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import {fetchWeather} from '../actions/index';

class App extends Component {
	componentDidMount() {
		this.props.fetchWeather('Tokyo');
		this.props.fetchWeather('Osaka');
		this.props.fetchWeather('Kyoto');
	}

	render() { 		

	    return (
			<div className='row'>
				<h1>Weather Charts By City (Japan)</h1>
				<SearchBar/>	
				<WeatherList/>			
			</div>
	    );
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch)
}


export default connect(null, mapDispatchToProps)(App)