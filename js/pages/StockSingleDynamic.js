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

var StockSingleDynamic = React.createClass({
	render: function(){
		return(
            <ScrollView>
                <Title name={'论股堂'} />
                    <View>
                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖一: 16.38</Text>
                            <Text style={[styles.item]}>买一: 16.29</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖二：16.37</Text>
                            <Text style={[styles.item]}>买二：16.30</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖三：16.36</Text>
                            <Text style={[styles.item]}>买三：16.31</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>卖四：16.35</Text>
                            <Text style={[styles.item]}>买四：16.32</Text>
                        </View>

                        <View style={[styles.oneLine,{paddingBottom:10}]}>
                            <Text style={[styles.item]}>卖五：16.34</Text>
                            <Text style={[styles.item]}>买五：16.33</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>内盘: 8.42万手</Text>
                            <Text style={[styles.item]}>外盘: 6.27万手</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>量比: 0.49</Text>
                            <Text style={[styles.item]}>委比: -69.58%</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>成交量: 14.69万手</Text>
                            <Text style={[styles.item]}>成交额: 2.40亿</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>涨停: 17.97</Text>
                            <Text style={[styles.item]}>跌停: 14.71</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>每股净资产: 14.60</Text>
                            <Text style={[styles.item]}>每股收益: 1.24</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>总股本: 216.18亿</Text>
                            <Text style={[styles.item]}>总市值: 3532.43亿</Text>
                        </View>

                        <View style={[styles.oneLine]}>
                            <Text style={[styles.item]}>流通股本: 205.19亿</Text>
                            <Text style={[styles.item]}>流通市值: 3352.77亿</Text>
                        </View>
                    </View>


                <Title name={'实时数据分析'} />
                <View style={{padding:10,flexDirection:'column'}}>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>市净率</Text>
                            <Text style={[styles.text]}>1.12</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>市净率较小,投资收益可以与银行等投资方式相当,市净率处于正常范围,风险较小,有投资价值</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>委比</Text>
                            <Text style={[styles.text]}>-69.58%</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>卖盘大于买盘,较多人对股票期望不高</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>涨跌幅</Text>
                            <Text style={[styles.text]}>0.00%</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>股价略微上涨,参考其他数据没有发现下跌信号,可以小量入手</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>市盈率</Text>
                            <Text style={[styles.text]}>16.60</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>市盈率是一项风险指标,此时该股市盈率为6.6,市盈率偏低,投资该股的风险较小,若此前经历下跌周期,可能因为不被多数人看好,需谨慎对待</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>内外盘</Text>
                            <Text style={[styles.text]}>内盘:8.42万手</Text>
                            <Text style={[styles.text]}>外盘:6.27万手</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>外盘数量大于内盘,卖方力量较强,内外盘都较小,股价小幅上涨,可能是庄家在锁定筹码,轻轻托着股价向上走</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>量比</Text>
                            <Text style={[styles.text]}>0.49</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>基于量比分析,股票交易不活跃,这种缩量需谨慎,可能股票本身期望不高,也存在庄家长期控股的可能,后者存在一定市场机会市净率较小,投资收益可以与银行等投资方式相当,市净率处于正常范围,风险较小,有投资价值</Text>
                    </View>
                    <View style={[styles.dynamicAnalysisItem]}>
                        <View style={[styles.dynamicAnalysisItem_left]}>
                            <Text style={[styles.text]}>换手率</Text>
                            <Text style={[styles.text]}>0.07%</Text>
                        </View>
                        <Text style={[styles.dynamicAnalysisItem_right,styles.text]}>该股出现过低的换手率,如果这种情况持续较长时间,大于5个交易日,股价见底,此后容易出现上涨行情</Text>
                    </View>
                    
                </View>

                <View  style={{height:100,backgroundColor:'#031b2f'}}></View>
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