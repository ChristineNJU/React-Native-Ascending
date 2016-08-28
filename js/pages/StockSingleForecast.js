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
var TitleSecond = require('../components/TitleSecond');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';

var chartStyle = require('../datas/ChartStyle');

var StockSingleForecast = React.createClass({
	render: function(){
		return(
            <ScrollView>
                <Title name={'走势预测'} />

                <TitleSecond name={'SVM模型预测'} />
                <StockLine
                    data={chartData.forecast_svm}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <TitleSecond name={'BP神经网络模型预测'} />
                <StockLine
                    data={chartData.forecast_bp}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <Title name={'特殊预测'} />
                <SpecialForecast />

                <View  style={{height:100,backgroundColor:'#031b2f'}}></View>
            </ScrollView>
		)
	}
});

var SpecialForecast = React.createClass({
    render:function(){
        return(
            <View 
                style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <StockLine
                        style={{flex:1}}
                        data={chartData.forecast_bp}
                        options={chartStyle.specialForecast}
                        xKey='x'
                        yKey='y'/>
                <Tip />
            </View>
        )
    }
})

var Tip = React.createClass({
    render:function(){
        return(
            <Text 
                numberOfLines={7}
                style={{color:'#bac7d4',paddingLeft:10,paddingRight:10,flex:1}}>
            {'Tips: Boll线上下的两条线的距离逐渐变小,Boll线开口变窄。此时股票价格处于boll线中线之上,行情看好,后市可能会出现上涨趋势。'}
            </Text>
        )
    }
})

var chartData = {
    forecast_svm:[
        [
            {"x": 0,"y": 47782}, 
            {"x": 1,"y": 48497}, 
            {"x": 2,"y": 77128}, 
            {"x": 3,"y": 73413}
        ]
       
    ],
    forecast_bp:[
        [
            {"x": 0,"y": 47782}, 
            {"x": 1,"y": 48497}, 
            {"x": 2,"y": 77128}, 
            {"x": 3,"y": 73413}
        ]
    ]
}

module.exports = StockSingleForecast;