import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
    } = require('react-native');
var Title = require('../components/Title');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';

var chartStyle = require('../datas/ChartStyle');

var StockSingleEvaluate = React.createClass({
	render: function(){
		var relative = this.props.relative;
		var radarData = [];
		radarData[0] = this.props.stockGrade;
		// console.log(this.props.stockGrade);
		// console.log(radarData);
		// console.log(chartStyle.radar);
		return(
			<ScrollView>
				<Title name={'股票评分'} />
				<Radar 
					data={radarData}
					options={chartStyle.radar}/>

				<Title name={'大盘相关性分析'} />
				<View style={[styles.label]}>
					<Text style={[styles.text]}>{'Beta系数:'}</Text>
					<Text style={[styles.text]}>{relative.beta}</Text>	
				</View>
				<View style={[styles.label]}>
					<Text style={[styles.text]}>{'综合相关性:'}</Text>
					<Text style={[styles.text]}>{relative.corrcoef}</Text>	
				</View>
				<View style={[styles.label]}>
					<Text style={[styles.text]}>{'开盘价相关性:'}</Text>
					<Text style={[styles.text]}>{relative.open_corrcoef}</Text>	
				</View>
				<View style={[styles.label]}>
					<Text style={[styles.text]}>{'成交量相关性:'}</Text>
					<Text style={[styles.text]}>{relative.volume_corrcoef}</Text>	
				</View>
				<View style={[styles.label]}>
					<Text style={[styles.text]}>{'涨跌幅相关性:'}</Text>
					<Text style={[styles.text]}>{relative.devia_corrcoef}</Text>	
				</View>


				<View  style={{height:60,backgroundColor:'#031b2f'}}></View>
 			</ScrollView>
		)
	}
});

var styles = StyleSheet.create({
	label:{
		paddingLeft:10,
		paddingTop:5,
		flexDirection:'row'
	},
	text:{
		color:'#bac7d4',
		fontSize:12,
		flex:12
	}
});

var chartData = {
	evaluate: [{
        "speed": 74,
        "balance": 29,
        "explosives": 40,
        "energy": 40,
        "flexibility": 30,
        "agility": 25,
        "endurance": 44
    }],
};

module.exports = StockSingleEvaluate;