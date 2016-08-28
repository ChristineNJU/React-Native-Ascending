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

var StockSingle = React.createClass({

    //getDefaultProps:function(){
    //    return {
    //        title: 'MyScene'
    //    };
    //},

    //constructor(props) {
        //super(props);
    //},

    render: function(){
        // console.log('in stock single');
        return(
            <View style={{backgroundColor:colors.blue}}>
                <View style={styles.basicInfo}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../img/1.png')} resizeMode={'contain'} style={[styles.industryIcon]}/>
                        <View style={{paddingLeft:10}}>
                            <Text style={[{fontSize:20,color:'#ffde00'}]}>
                                {'浦发银行'}
                                <Text style={[styles.text,{fontSize:16}]}>(sh600000)</Text>
                            </Text>
                            <Text style={[styles.text,{fontSize:12}]}>
                                {'行业类型：金融'}
                            </Text>
                            <Text style={[styles.text,{fontSize:12}]}>
                                {'行业排名：23/45'}
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',padding:10,justifyContent:'flex-end'}}>
                        <Text style={[styles.text,{fontSize:28,color:'#eb6877'} ]}>
                            {'17.45'}
                        </Text>
                        <View style={{flexDirection:'column',alignItems:'flex-end',justifyContent:'center',paddingLeft:10}}>
                            <Text style={[styles.text,{fontSize:12}]}>0.01</Text>
                            <Text style={[styles.text,{fontSize:12}]}>+0.53%</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.generalInfo]}>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'今开：69.25'}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'昨收：69.25'}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'最高：69.25'}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'最低：69.25'}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'买一：69.25'}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'卖一：69.25'}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text,styles.fontMid]}>{'涨跌：69.25'}</Text>
                        <Text style={[styles.text,styles.fontMid]}>{'振幅：69.25'}</Text>
                    </View>
                </View>

                <View style={{height:500}}>
                    <ScrollableTabView tabBarPosition="top" initialPage={3} page={3} tabBarUnderlineColor={colors.yellow}
                                       renderTabBar={()=><DefaultTabBar backgroundColor={colors.blue} activeTextColor={colors.yellow} inactiveTextColor={colors.text}/>}>
                        <StockSingleBasicGraph tabLabel="基本图表"/>
                        <StockSingleEvaluate tabLabel="分析评估" />
                        <StockSingleForecast tabLabel="走势预测" />
                        <StockSingleDynamic tabLabel="实时分析" />
                        <StockSingleCompany tabLabel="公司资讯" />
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