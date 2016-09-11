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
var urls = require('../datas/Urls');
var TableRow = require('../components/TableRow');

var StockSingleBasicGraph = React.createClass({

    getDefaultProps: function(){
       return {
           stockId:'sh600004',
       };
    },

    OneBasicRow:function(data){
        var item = [data.dateNum,data.open,data.close,data.high,data.low,data.volume,data.amount];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    OneMACDRow:function(data){
        var item = [data.dateNum,data.macd,data.dif,data.dea,data.atr];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    OneRSIRow:function(data){
        var item = [data.dateNum,data.rsi6,data.rsi12,data.rsi24];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    OneKDJRow:function(data){
        var item = [data.dateNum,data.slowK,data.slowD,data.slowJ];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    OneBOLLRow:function(data){
        var item = [data.dateNum,data.boll_upper,data.boll_middle,data.boll_low];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    componentWillMount: async function(){
        this.loadData();
    },

    loadData: async function(){
        await fetch(urls.tableData+this.props.stockId)
        .then((response)=>response.json())
        .then((responseData)=>{
            // console.log(responseData.allInfo);
            this.setState({
                allInfo:this.state.allInfo.cloneWithRows(responseData.allInfo),
            });
            // console.log(this.state.allInfo);
        }).catch((error)=>{
            console.error(error);
        });
    },

    getInitialState: function(){
        return{
            allInfo:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    },

    render:function(){
         return(
            <ScrollView >
                <Title name={'基础数据'}/>
                <TableRow content={['日期','开盘','收盘','最高','最低','成交量','成交金额']} />
                <ListView
                    dataSource={this.state.allInfo}
                    renderRow={this.OneBasicRow} />

                <Title name={'MACD(指数平滑异同平均数)'} />
                <TableRow content={['日期','MACD','DIFF','ATR','DEA']} />
                <ListView
                    dataSource={this.state.allInfo}
                    renderRow={this.OneMACDRow} />
                

                <Title name={'RSI(相对强弱指标)'} />
                <TableRow content={['日期','RSI6','RSI12','RSI24']} />
                <ListView
                    dataSource={this.state.allInfo}
                    renderRow={this.OneRSIRow} />
                

                <Title name={'KDJ(随机指标)'} />
                <TableRow content={['日期','Slow K','Slow D','Slow J']} />
                <ListView
                    dataSource={this.state.allInfo}
                    renderRow={this.OneKDJRow} />
                

                <Title name={'BOLL(布林线)'} />
                <TableRow content={['日期','value','BOLL UPPER','BOLL MIDDLE','BOLL LOW']} />
                <ListView
                    dataSource={this.state.allInfo}
                    renderRow={this.OneBOLLRow} />
                

                <View  style={{height:120,backgroundColor:'#031b2f'}}></View>
            </ScrollView >
        );
    }
});


// var TableRow = React.createClass({
//     render:function(){

//         var content = this.props.content;
//         var headerContent = content.map(one => {
//             return <Text style={{color:'#bac7d4',flex:1}}>{one}</Text>;
            
//         });
//         console.log(content);
//         return(
//             <View style={{flexDirection:'row',paddingTop:5,paddingLeft:10,paddingRight:10}}>
//                 {headerContent}
//             </View>
//         );
//     }
// });



AppRegistry.registerComponent('StockSingleBasicGraph', () => StockSingleBasicGraph);
module.exports = StockSingleBasicGraph;