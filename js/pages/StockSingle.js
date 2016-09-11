import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = require('react-native');
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
var StockSingleBasicGraph = require('./StockSingleBasicGraph');
var StockSingleEvaluate = require('./StockSingleEvaluate');
var StockSingleForecast = require('./StockSingleForecast');
var StockSingleDynamic = require('./StockSingleDynamic');
var StockSingleCompany = require('./StockSingleCompany');
var urls = require('../datas/Urls');

var StockSingle = React.createClass({


    getInitialState: function(){
        return{
            stockInfo: {
                stockid:'--',
                name:'--',
                industry:'--',
                fullName:'--',
                listDate:'--',
                status:'--',
                description:'--'
            },
            current: {
                price:'--',
                devia_val:'--',
                devia_per:'--',
                open:'--',
                volume:'--',
                high:'--',
                up_stop:'--',
                inner_count:'--',
                amount:'--',
                committee:'--',
                avail_amount:'--',
                pe:'--',
                profit_per:'--',
                total_volume:'--',
                close:'--',
                turnover:'--',
                low:'--',
                down_stop:'--',
                outer_count:'--',
                amplitude:'--',
                quantity_ratio:'--',
                total_amount:'--',
                pb:'--',
                value_per_stock:'--',
                available_stock:'--',
                open_attri:'--',
                high_attri:'--',
                low_attri:'--',
                up_attri:'--',
                down_attri:'--',
                out5:'--',
                out5_vol:'--',
                out4:'--',
                out4_vol:'--',
                out3:'--',
                out3_vol:'--',
                out2:'--',
                out2_vol:'--',
                out1:'--',
                out1_vol:'--',
                in5:'--',
                in5_vol:'--',
                in4:'--',
                in4_vol:'--',
                in3:'--',
                in3_vol:'--',
                in2:'--',
                in2_vol:'--',
                in1:'--',
                in1_vol:'--',
            },
            instruction:{
                PBAnalysis:'--',
                PEAnalysis:'--',
                WeibiAnalysis:'--',
                InOutAnalysis:'--',
                TurnOverAnalysis:'--',
                VolumeAnalysis:'--',
                UpDownAnalysis:'--',
            },
            news:{},
            reports:{},
            stockGrade:{},
            relative:{},
            forecastInfo:{},
            bpForecast:{},
            allInfo:{},
            specialPredict:{},
            detailStrategy:{},
            season:{},
        };
    },

    getDefaultProps: function(){
       return {
           stockId:'sh600004'
       };
    },

    componentWillMount: async function(){
        this.loadData();
    },

    componentDidMount: function(){
    },

    loadData: async function(){
        await fetch(urls.basicInfo+this.props.stockId)
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                stockInfo:responseData.stockInfo,
                current:responseData.current,
                instruction:responseData.instruction,
                news:responseData.news,
                reports:responseData.reports,
                stockGrade:responseData.stockGrade,
                relative:responseData.relative,
                forecastInfo:responseData.forecastInfo,
                bpForecast:responseData.bpForecast,
                allInfo:responseData.allInfo,
                specialPredict:responseData.specialPredict,
                detailStrategy:responseData.detailStrategy,
                season:responseData.season,
            });

        }).catch((error)=>{
            console.error(error);
        });
    },

    render: function(){
        var stockInfo = this.state.stockInfo;
        // var forecastInfo = this.state.datas.forecastInfo;
        // var bpForecast = this.state.datas.bpForecast;
        // var stockGrade = this.state.datas.stockGrade;
        // var relative = this.state.datas.relative;
        // var news = this.state.datas.news;
        // var reports = this.state.datas.reports;
        var instruction = this.state.instruction;
        var current = this.state.current;

        // var stockInfo = {
        //     name:'浦发银行',
        //     industry:'金融业',
        // };

        // var current = {
        //     price:'22.3',
        //     devia_val:'0.1',
        //     devia_per:'+2.0%'
        // };

        return(
            <View style={{backgroundColor:colors.blue}}>
                <View style={styles.basicInfo}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../img/1.png')} resizeMode={'contain'} style={[styles.industryIcon]}/>
                        <View style={{paddingLeft:10}}>
                            <Text style={[{fontSize:20,color:'#ffde00'}]}>
                                {stockInfo.name}
                                <Text style={[styles.text,{fontSize:16}]}>({stockInfo.stockid})</Text>
                            </Text>
                            <Text style={[styles.text,{fontSize:12}]}>
                                {'行业类型：'}
                                {stockInfo.industry}
                            </Text>
                            <Text style={[styles.text,{fontSize:12}]}>
                                {'行业排名：23/45'}
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',padding:10,justifyContent:'flex-end'}}>
                        <Text style={[styles.text,{fontSize:28,color:'#eb6877'} ]}>
                            {current.price}
                        </Text>
                        <View style={{flexDirection:'column',alignItems:'flex-end',justifyContent:'center',paddingLeft:10}}>
                            <Text style={[styles.text,{fontSize:12}]}>{current.devia_val}</Text>
                            <Text style={[styles.text,{fontSize:12}]}>{current.devia_per}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.generalInfo]}>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'今开：'}{current.open}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'昨收：'}{current.close}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'最高：'}{current.high}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'最低：'}{current.low}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'买一：'}{current.in1}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'卖一：'}{current.out1}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'涨跌：'}{current.devia_val}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'振幅：'}{current.devia_per}</Text>
                    </View>
                </View>

                <View style={{height:500}}>
                    <ScrollableTabView tabBarPosition="top" initialPage={0} page={0} tabBarUnderlineColor={colors.yellow}
                                       renderTabBar={()=><DefaultTabBar backgroundColor={colors.blue} activeTextColor={colors.yellow} inactiveTextColor={colors.text}/>}>
                        
                        
                        
                        <StockSingleBasicGraph tabLabel="基本信息"
                            stockid = {this.props.stockid}/>

                        <StockSingleEvaluate tabLabel="分析评估" 
                            stockGrade = {this.state.stockGrade} 
                            relative = {this.state.relative} />

                        <StockSingleForecast tabLabel="走势预测" 
                            forecast = {this.state.forecastInfo}
                            bpForecast = {this.state.bpForecast}
                            specialPredict = {this.state.specialPredict}
                            detailStrategy = {this.state.detailStrategy} />

                        <StockSingleDynamic tabLabel="实时分析" 
                            current={current} 
                            instruction={instruction} />

                        <StockSingleCompany tabLabel="公司资讯" 
                            stockInfo={stockInfo} 
                            news={this.state.news} 
                            reports={this.state.reports}
                            season={this.state.season}/>

                    </ScrollableTabView>
                </View>
            </View>
        )
    }
});

const colors = {
    yellow:'#ffde00',
    blue:'#031b2f',
    white:'#ffffff',
    text:'#bac7d4'
};

var styles = StyleSheet.create({
    basicInfo: {
        backgroundColor: '#031b2f',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    text: {
        color: '#bac7d4'
    },
    fontMid:{
        fontSize:12
    },
    industryIcon:{
        width:60,
        height:60
    },
    generalInfo:{
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        backgroundColor: '#031b2f',
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

AppRegistry.registerComponent('StockSingle', () => StockSingle);
module.exports = StockSingle;