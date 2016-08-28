import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    ScrollView,
    ListView,
    StyleSheet,
    Text,
    View,
    Image
    } = require('react-native');
var Title = require('../components/Title');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';

var chartStyle = require('../datas/ChartStyle');

var StockSingleBasicGraph = React.createClass({
    render:function(){
        return(
            <ScrollView >
                <Title name={'K线图'}/>

                
                <Title name={'成交量·成交金额'} />
                <Bar
                    data={chartData.volume}
                    options={chartStyle.volume}
                    accessorKey='a'/>
                <StockLine
                    data={chartData.total}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>
                

                <Title name={'MACD(指数平滑异同平均线)'} />
                <Bar
                    data={chartData.volume}
                    options={chartStyle.volume}
                    accessorKey='a'/>

                <Title name={'RSI(相对强弱指标)'} />
                <StockLine
                    data={chartData.total}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <Title name={'KDJ(随机指标)'} />
                <StockLine
                    data={chartData.total}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <Title name={'BOLL(布林线)'} />
                <StockLine
                    data={chartData.total}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <View  style={{height:120,backgroundColor:'#031b2f'}}></View>
            </ScrollView >
        )
    }
});


var chartData = {
    volume: [
        [{
            "a": 49,
            "name": "apple"
        }, {
            "a": 42,
            "name": "apple"
        }],
        [{
            "a": 69,
            "name": "banana"
        }, {
            "a": 62,
            "name": "banana"
        }],
        [{
            "a": 29,
            "name": "grape"
        }, {
            "a": 15,
            "name": "grape"
        }]
    ],
    total: [
            [{
                "x": 0,
                "y": 47782
            }, {
                "x": 1,
                "y": 48497
            }, {
                "x": 2,
                "y": 77128
            }, {
                "x": 3,
                "y": 73413
            }, {
                "x": 4,
                "y": 58257
            }, {
                "x": 5,
                "y": 40579
            }, {
                "x": 6,
                "y": 72893
            }, {
                "x": 7,
                "y": 60663
            }, {
                "x": 8,
                "y": 15715
            }, {
                "x": 9,
                "y": 40305
            }, {
                "x": 10,
                "y": 68592
            }, {
                "x": 11,
                "y": 95664
            }, {
                "x": 12,
                "y": 17908
            }, {
                "x": 13,
                "y": 22838
            }, {
                "x": 14,
                "y": 32153
            }, {
                "x": 15,
                "y": 56594
            }, {
                "x": 16,
                "y": 76348
            }, {
                "x": 17,
                "y": 46222
            }, {
                "x": 18,
                "y": 59304
            }],
            [{
                "x": 0,
                "y": 132189
            }, {
                "x": 1,
                "y": 61705
            }, {
                "x": 2,
                "y": 154976
            }, {
                "x": 3,
                "y": 81304
            }, {
                "x": 4,
                "y": 172572
            }, {
                "x": 5,
                "y": 140656
            }, {
                "x": 6,
                "y": 148606
            }, {
                "x": 7,
                "y": 53010
            }, {
                "x": 8,
                "y": 110783
            }, {
                "x": 9,
                "y": 196446
            }, {
                "x": 10,
                "y": 117057
            }, {
                "x": 11,
                "y": 186765
            }, {
                "x": 12,
                "y": 174908
            }, {
                "x": 13,
                "y": 75247
            }, {
                "x": 14,
                "y": 192894
            }, {
                "x": 15,
                "y": 150356
            }, {
                "x": 16,
                "y": 180360
            }, {
                "x": 17,
                "y": 175697
            }, {
                "x": 18,
                "y": 114967
            }],
            [{
                "x": 0,
                "y": 125797
            }, {
                "x": 1,
                "y": 256656
            }, {
                "x": 2,
                "y": 222260
            }, {
                "x": 3,
                "y": 265642
            }, {
                "x": 4,
                "y": 263902
            }, {
                "x": 5,
                "y": 113453
            }, {
                "x": 6,
                "y": 289461
            }, {
                "x": 7,
                "y": 293850
            }, {
                "x": 8,
                "y": 206079
            }, {
                "x": 9,
                "y": 240859
            }, {
                "x": 10,
                "y": 152776
            }, {
                "x": 11,
                "y": 297282
            }, {
                "x": 12,
                "y": 175177
            }, {
                "x": 13,
                "y": 169233
            }, {
                "x": 14,
                "y": 237827
            }, {
                "x": 15,
                "y": 242429
            }, {
                "x": 16,
                "y": 218230
            }, {
                "x": 17,
                "y": 161511
            }, {
                "x": 18,
                "y": 153227
            }]
        ]
};


AppRegistry.registerComponent('StockSingleBasicGraph', () => StockSingleBasicGraph);
module.exports = StockSingleBasicGraph;