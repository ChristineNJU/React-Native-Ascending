import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
    } = require('react-native');
var Title = require('../components/Title');
var TitleSecond = require('../components/TitleSecond');
import {Bar,Pie,StockLine,SmoothLine,Scatterplot,Radar,Tree} from 'react-native-pathjs-charts';
var TableRow = require('../components/TableRow');

var StockSingleCompany = React.createClass({


    MeiguRow:function(data){
        var item = [data.date,data.jqmgly,data.tbmgly,data.mgjzc_tzh];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    YingliRow:function(data){
        var item = [data.date,data.jqjzcsyl,data.zzczzl,data.zyywlr];
        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    ChengzhangRow:function(data){
        var item = [data.date,data.jlrzzl,data.jzczzl,data.zzczzl];

        return(
            <TableRow style={{color:'#bac7d4',flex:1}} 
                content={item} />
        );
    },

    newsOne :function(news){
        return (
            <View style={{paddingLeft:10,paddingRight:10,paddingBottom:10}}>
                <Text style={[styles.text]}>{news.title}</Text>
                <Text style={[styles.text]}>{news.date}</Text>
            </View>
        );
    },

    reportOne: function(report){
        return(
             <View style={{paddingLeft:10,paddingRight:10,paddingBottom:10}}>
                <Text style={[styles.text]}>{this.InfoTrans(report.author,report.date)}</Text>
                <Text style={[styles.text]}>{report.title}</Text>
            </View>
        );
    },

    getInitialState: function(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // console.log(this.props.news);
        return{
            newsSource:ds.cloneWithRows(this.props.news),
            reportSource:ds.cloneWithRows(this.props.reports),
            season:ds.cloneWithRows(this.props.season),
        };
    },

    InfoTrans: function(author,date){
        return author+' '+date;
    },

	render: function(){
        var stockInfo = this.props.stockInfo;

        return(
            <ScrollView>
                <Title name={'公司简介'} />
                <View style={{paddingLeft:10,paddingRight:10}}>
                    <Text style={[styles.text,{paddingBottom:5}]}>上市日期：{stockInfo.listDate}</Text>
                    <Text style={[styles.text,{paddingBottom:5}]}>公司状态：{stockInfo.status}</Text>
                    <Text style={[styles.text,{paddingBottom:5}]}>公司描述：{stockInfo.description}</Text>
                </View>


                <Title name={'新闻公告'} />
                <ListView
                    dataSource={this.state.newsSource}
                    renderRow={this.newsOne} />

                <Title name={'研究报告'} />
                <ListView
                    dataSource={this.state.reportSource}
                    renderRow={this.reportOne} />
                

                <Title name={'盈利能力'} />
                <TitleSecond name={'每股指标'} />
                <TableRow content={['日期','加权每股利益','调整后每股收益','调整后每股净资产']} />
                <ListView
                    dataSource={this.state.season}
                    renderRow={this.MeiguRow} />

                <TitleSecond name={'盈利能力'} />
                <TableRow content={['日期','加权净资产收益率','总资产净利润率','主营业务利润率']} />
                <ListView
                    dataSource={this.state.season}
                    renderRow={this.YingliRow} />
                

                <TitleSecond name={'成长能力'} />
                <TableRow content={['日期','净利润增长率','净资产增长率','总资产增长率']} />
                <ListView
                    dataSource={this.state.season}
                    renderRow={this.ChengzhangRow} />
                

                <View  style={{height:60,backgroundColor:'#031b2f'}}></View>
            </ScrollView>
        )

		// return(
  //           <ScrollView>
  //               <Title name={'公司简介'} />
  //               <View style={{paddingLeft:10,paddingRight:10}}>
  //                   <Text style={[styles.text,{paddingBottom:5}]}>上市日期：{stockInfo.listDate}</Text>
  //                   <Text style={[styles.text,{paddingBottom:5}]}>公司状态：{stockInfo.status}</Text>
  //                   <Text style={[styles.text,{paddingBottom:5}]}>公司描述：{stockInfo.description}</Text>
  //               </View>


  //               <Title name={'新闻公告'} />
  //               <ListView
  //                   dataSource={this.state.newsSource}
  //                   renderRow={this.newsOne} />

  //               <Title name={'研究报告'} />
  //               <ListView
  //                   dataSource={this.state.reportSource}
  //                   renderRow={this.reportOne} />
                

  //               <Title name={'盈利能力'} />
  //               <TitleSecond name={'每股指标'} />
  //               <StockLine
  //                   data={chartData.every}
  //                   options={chartStyle.stockLine}
  //                   xKey='x'
  //                   yKey='y'/>

  //               <TitleSecond name={'盈利能力'} />
  //               <StockLine
  //                   data={chartData.every}
  //                   options={chartStyle.stockLine}
  //                   xKey='x'
  //                   yKey='y'/>

  //               <TitleSecond name={'成长能力'} />
  //               <StockLine
  //                   data={chartData.every}
  //                   options={chartStyle.stockLine}
  //                   xKey='x'
  //                   yKey='y'/>

  //               <View  style={{height:60,backgroundColor:'#031b2f'}}></View>
  //           </ScrollView>
		// )
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