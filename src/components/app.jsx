//wrapper component
import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list'

export default class App extends Component {
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
