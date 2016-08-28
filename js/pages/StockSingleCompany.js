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

var StockSingleCompany = React.createClass({
	render: function(){
		return(
            <ScrollView>
                <Title name={'公司简介'} />
                <View style={{paddingLeft:10,paddingRight:10}}>
                    <Text style={[styles.text,{paddingBottom:5}]}>上市日期：1999-11-10</Text>
                    <Text style={[styles.text,{paddingBottom:5}]}>公司状态：上市</Text>
                    <Text style={[styles.text,{paddingBottom:5}]}>公司描述：吸收公众存款；发放短期、中期和长期贷款；办理结算；办理票据贴现；
                    发行金融债券；代理发行、代理兑付、承销政府债券；买卖政府债券；同业拆借；提供信用
                    证服务及担保；代理收付款项及代理保险业务；提供保管箱服务。外汇存款；外汇贷款；外
                    汇汇款；外币兑换；国际结算；同业外汇拆借；，外汇票据的承兑和贴现；外汇借款；外汇
                    担保；结汇、售汇；买卖和代理买卖股票以外的外币有价证券；自营外汇买卖；代客外汇买卖；
                    资信调查、咨询、见证业务；离岸银行业务。经中国人民银行批准的其他业务。</Text>
                </View>


                <Title name={'新闻公告'} />
                <View style={{paddingLeft:10,paddingRight:10,paddingBottom:5}}>
                    <Text style={[styles.text]}>2016-08-24 22:25:36</Text>
                    <Text style={[styles.text]}>{'监管重拳突至！6000亿"万能险"将陆续撤出A股 涉64股'}</Text>
                </View>
                <View style={{paddingLeft:10,paddingRight:10,paddingBottom:5}}>
                    <Text style={[styles.text]}>2016-08-24 22:25:36</Text>
                    <Text style={[styles.text]}>{'监管重拳突至！6000亿"万能险"将陆续撤出A股 涉64股'}</Text>
                </View>

                <Title name={'研究报告'} />
                <View style={{paddingLeft:10,paddingRight:10,paddingBottom:5}}>
                    <Text style={[styles.text]}>中信建投证券 2016-08-12</Text>
                    <Text style={[styles.text]}>浦发银行:零售板块发力,中收增速喜人</Text>
                </View>

                <Title name={'盈利能力'} />
                <TitleSecond name={'每股指标'} />
                <StockLine
                    data={chartData.every}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <TitleSecond name={'盈利能力'} />
                <StockLine
                    data={chartData.every}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <TitleSecond name={'成长能力'} />
                <StockLine
                    data={chartData.every}
                    options={chartStyle.stockLine}
                    xKey='x'
                    yKey='y'/>

                <View  style={{height:100,backgroundColor:'#031b2f'}}></View>
            </ScrollView>
		)
	}
});

var chartData = {
    every: [
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
        ],
};


var styles = StyleSheet.create({
    text:{
        color:'#bac7d4'
    }
});
module.exports = StockSingleCompany;