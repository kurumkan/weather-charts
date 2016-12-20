import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
	

	renderWeather(data){		
		var {lat, lon} = data.city.coord;		
		
		var tempArray=data.list.map((weather)=>weather.main.temp-273.15);
		var humidityArray=data.list.map((weather)=>weather.main.humidity);
		var pressureArray=data.list.map((weather)=>weather.main.pressure);

		return (
			<tr key={lat+lon}>
				<td>
					<GoogleMap lat={lat} lng={lon}/>
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
						<tr>
							<th>City</th>
							<th>Temperature (&#8451;)</th>
							<th>Pressure (hPa)</th>
							<th>Humidity (%)</th>
						</tr>	
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