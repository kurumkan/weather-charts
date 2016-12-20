import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default class Chart extends Component {		

	average(data){
		return _.round(_.sum(data)/data.length);
	}
	
	render(){
		var {data, color} = this.props;
		return (			
			<div>
				<Sparklines height={120} width={180} data={data}>
					<SparklinesLine color={color}/>
					<SparklinesReferenceLine type='avg'/>
				</Sparklines>				
				{this.average(data)}				
			</div>
		)
	}
}
