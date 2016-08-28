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

var StockSingleCompany = React.createClass({
	render: function(){
		return(
            <ScrollView>
                <Title name={'公司简介'} />
                <Title name={'新闻公告'} />
                <Title name={'研究报告'} />
                <Title name={'盈利能力'} />

                <View  style={{height:100,backgroundColor:'#031b2f'}}></View>
            </ScrollView>
		)
	}
});

module.exports = StockSingleCompany;