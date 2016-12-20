import axios from 'axios';

const API_KEY = '4534d0d0d3c28881836afe349b132f08';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY+'&q=';

export var fetchWeather = (city)=>{
	const url = ROOT_URL+city+',jp';

	//promise
	const request = axios.get(url);	

	return {		
		type: 'FETCH_WEATHER',
		payload: request		
	}
}