import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
    } = require('react-native');
var Title = require('../elements/Title');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';
var ChartStyle = require('../datas/ChartStyle');

var StockSingleBasicGraph = React.createClass({
    render:function(){
        return(
            <ScrollView >
                <Title tabLabel="基本图表" name={'K线图'}/>
                <Bar
                    data={chartData.volume}
                    options={ChartStyle.bar}
                    accessorKey='v'/>
            </ScrollView >
        )
    }
});


var chartData = {
    volume: [
        [{
            "v": 49,
            "name": "apple"
        }, {
            "v": 42,
            "name": "apple"
        }],
        [{
            "v": 69,
            "name": "banana"
        }, {
            "v": 62,
            "name": "banana"
        }],
        [{
            "v": 29,
            "name": "grape"
        }, {
            "v": 15,
            "name": "grape"
        }]
    ]
};


AppRegistry.registerComponent('StockSingleBasicGraph', () => StockSingleBasicGraph);
module.exports = StockSingleBasicGraph;