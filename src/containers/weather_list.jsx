import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/Chart';

class WeatherList extends Component {
	constructor(props) {
		super(props);
		this.state={};	
	}	

	renderWeather(data){
		var {name}=data.city;		

		var tempArray=data.list.map((weather)=>weather.main.temp);
		var humidityArray=data.list.map((weather)=>weather.main.humidity);
		var pressureArray=data.list.map((weather)=>weather.main.pressure);

		return (
			<tr key={name}>
				<td>
					{name}
				</td>
				<td>
					<Chart data={tempArray} color='orange' />
				</td>
				<td>
					<Chart data={pressureArray} color='green' />
				</td>				
				<td>
					<Chart data={humidityArray} color='black' />
				</td>
			</tr>
		)
	}

	render(){
		return (			
			<div>
				<table className='table table-hover'>
					<thead>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			</div>
		)
	}
}

//the same as
// function mapDispatchToProps(state){
// 	var {weather} = state
// 	return {weather}
// }

//now this.props has 'weather' field
function mapDispatchToProps({weather}){
	return {weather}
}

export default connect(mapDispatchToProps)(WeatherList);