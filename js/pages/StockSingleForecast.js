import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
    } = require('react-native');
var Title = require('../components/Title');
var TitleSecond = require('../components/TitleSecond');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';
var TableRow = require('../components/TableRow');

var StockSingleForecast = React.createClass({

    OneRow:function(data){
        var item = [data.date,data.price_middle];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },
    getInitialState: function(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // console.log('1111111111111________');
        // console.log(this.props.forecastInfo);
        return{
            svm_data:ds.cloneWithRows(this.props.forecast),
            bp_data:ds.cloneWithRows(this.props.bpForecast),
        };
    },
	render: function(){

        return(
            <ScrollView>
                <Title name={'走势预测'} />

                <TitleSecond name={'SVM模型预测'} />
                <TableRow content={['日期','预测价格']} />
                <ListView
                    dataSource={this.state.svm_data}
                    renderRow={this.OneRow} />
               
                <TitleSecond name={'BP神经网络模型预测'} />
                <TableRow content={['日期','预测价格']} />
                <ListView
                    dataSource={this.state.bp_data}
                    renderRow={this.OneRow} />

                <Title name={'特殊预测'} />
                <SpecialPredict data = {this.props.specialPredict} />

            </ScrollView>
        );
	}
});

var SpecialPredict = React.createClass({
    
    render:function(){
        var specialP = this.props.data;
        var content = specialP.map(oneDay => {
            var kdj = oneDay.kdjgrade == 0?null:<Text style={{paddingTop:5,color:'#bac7d4'}}>{oneDay.kdjIns}</Text>;
            var macd = oneDay.macdgrade ==0?null:<Text style={{paddingTop:5,color:'#bac7d4'}}>{oneDay.macdIns}</Text>;
            var rsi = oneDay.rsigrade ==0?null:<Text style={{paddingTop:5,color:'#bac7d4'}}>{oneDay.rsiIns}</Text>;
            var boll = oneDay.bollgrade ==0?null:<Text style={{paddingTop:5,color:'#bac7d4'}}>{oneDay.bollIns}</Text>;
            if(kdj != null || macd != null || rsi != null || boll != null){
                return (
                    <View style={{padding:10,color:'#bac7d4'}}>
                        <Text style={{color:'#ffde00'}}>{oneDay.tabTablesData.dateNum}</Text>
                        {kdj}{macd}{rsi}{boll}
                    </View>
                );
            }
            
        });

        return(
            <View>
                {content}
            </View>
        )
    }
});

// var SpecialForecast = React.createClass({
//     render:function(){
//         return(
//             <View 
//                 style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
//                 <StockLine
//                         style={{flex:1}}
//                         data={chartData.forecast_bp}
//                         options={chartStyle.specialForecast}
//                         xKey='x'
//                         yKey='y'/>
//                 <Tip />
//             </View>
//         )
//     }
// })

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
            {x: 0,y: 47782,z:111}, 
            {x: 1,y: 48497,z:222}, 
            {x: 2,y: 77128,z:333}, 
            {x: 3,y: 73413,z:444}
        ]
       
    ],
    forecast_bp:[
        [
            {"x": 0,"y": 47782}, 
            {"x": 1,"y": 48497}, 
            {"x": 2,"y": 77128}, 
            {"x": 3,"y": 73413}
        ]
    ],
    testData:[
        [
            {date: 911,price_middle: 14.49},
            {date: 912,price_middle: 14.47},
            {date: 913,price_middle: 14.87},
            {date: 914,price_middle: 14.87},
            {date: 915,price_middle: 14.97},
            {date: 916,price_middle: 14.87},
            {date: 917,price_middle: 14.48}

        ]
    ],
    testData2:[
        [
            {date:'0911',price_middle:14.49,price_high:14.5896,price_low:14.4079},
            {date:'0912',price_middle:14.47,price_high:14.5896,price_low:14.4079},
            {date:'0913',price_middle:14.87,price_high:14.5896,price_low:14.4079},
            {date:'0914',price_middle:14.87,price_high:14.5896,price_low:14.4079},
            {date:'0915',price_middle:14.97,price_high:14.5896,price_low:14.4079},
            {date:'0916',price_middle:14.87,price_high:14.5896,price_low:14.4079},
            {date:'0917',price_middle:14.48,price_high:14.5896,price_low:14.4079},

        ]
    ],
}

module.exports = StockSingleForecast;