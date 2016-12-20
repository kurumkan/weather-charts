//display a tiny google map using react-google-map
import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default class GoogleMapCustom extends Component {		
	
	render(){		
		var {lat,lng} = this.props;
		return (						
			<GoogleMapLoader
				containerElement={<div style={{height: '100%'}} />}
				googleMapElement={
					<GoogleMap defaultZoom={12} defaultCenter={{lat: lat, lng: lng}}/>
				}
			/>		
		)
	}
}
