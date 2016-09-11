import React, { Component, PropTypes,String } from 'react';
var {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    } = require('react-native');
var Title = require('../components/Title');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';

var chartStyle = require('../datas/ChartStyle');

var _format = function(value){
    var s = value+'';
    // console.log('in _format');
    // console.log(typeof s);
    // console.log(typeof value);
    // console.log(s);
    return s.substr(0,s.indexOf('.')+5);
    // return s.toString().subString(0,4);
};


var StockSingleDynamic = React.createClass({
	render: function(){

        var current = this.props.current;
        var instruction = this.props.instruction;
        // current.out1 = _format(current.out1); 
        Object.keys(current).forEach((id) => {
            current[id] = _format(current[id]);
            // console.log(current[id]);
        });

		return(
            <ScrollView>
                <Title name={'论股堂'} />
                    <View>
                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖一: {current.out1}</Text>
                            <Text style={[styles.item]}>买一: {current.in1}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖二：{current.out2}</Text>
                            <Text style={[styles.item]}>买二：{current.in2}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖三：{current.out3}</Text>
                            <Text style={[styles.item]}>买三：{current.in3}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖四：{current.out4}</Text>
                            <Text style={[styles.item]}>买四：{current.in4}</Text>
                        </View>

                        <View style={[styles.oneLine,{paddingBottom:10}]}>
                            <Text style={[styles.item]}>卖五：{current.out5}</Text>
                            <Text style={[styles.item]}>买五：{current.in5}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>内盘: {current.inner_count}</Text>
                            <Text style={[styles.item]}>外盘: {current.outer_count}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>量比: {current.quantity_ratio}</Text>
                            <Text style={[styles.item]}>委比: {current.committee}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>成交量: {current.volume}</Text>
                            <Text style={[styles.item]}>成交额: {current.amount}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>涨停: {current.up_stop}</Text>
                            <Text style={[styles.item]}>跌停: {current.low_stop}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>每股净资产: {current.value_per_stok}</Text>
                            <Text style={[styles.item]}>每股收益: {current.profit_per}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>总股本: {current.total_volume}</Text>
                            <Text style={[styles.item]}>总市值: {current.totalamount}</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>流通股本: {current.available_stock}</Text>
                            <Text style={[styles.item]}>流通市值: {current.aiaile_amount}</Text>
                        </View>
                    </View>


                <Title name={'实时数据分析'} />
                <View style={{padding:10,flexDirection:'column'}}>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>市净率</Text>
                            <Text style={[styles.text]}>{current.pb}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.PBAnalysis}</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>委比</Text>
                            <Text style={[styles.text]}>{current.committee}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.WeibiAnalysis}</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>涨跌幅</Text>
                            <Text style={[styles.text]}>{current.devia_per}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.UpDownAnalysis}</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>市盈率</Text>
                            <Text style={[styles.text]}>{current.pe}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.PEAnalysis}</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>内外盘</Text>
                            <Text style={[styles.text]}>内盘:{current.inner_count}</Text>
                            <Text style={[styles.text]}>外盘:{current.outer_count}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.InOutAnalysis}</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>量比</Text>
                            <Text style={[styles.text]}>{current.quantity_ratio}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.VolumeAnalysis}</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>换手率</Text>
                            <Text style={[styles.text]}>{current.turnover}</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>{instruction.TurnOverAnalysis}</Text>
                    </View>
                    
                </View>

                <View  style={{height:60,backgroundColor:'#031b2f'}}></View>
            </ScrollView>
		)
	}
});

var styles = StyleSheet.create({
     oneLine:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row'
    },
    item:{
        color:'#bac7d4',
        flex:1
    },
    dynamicAnalysisItem:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingBottom:15
    },
    dynamicAnalysisItem_left:{
        flex:1
    },
    dynamicAnalysisItem_right:{
        flex:3
    },
    text:{
        color:'#bac7d4'
    }
})

module.exports = StockSingleDynamic;