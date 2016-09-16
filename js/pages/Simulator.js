import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    } = require('react-native');
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

var TableRow = require('../components/TableRow');

var Simulator = React.createClass({
	render:function(){

		var data = [{bdate:'09-30',edate:'10-02',name:'hhh',benefit:30,big:50},
		{bdate:'09-30',edate:'10-02',name:'hhh',benefit:30,big:50}];

		data  = this.props.simulators;
		return(
			<View style={{backgroundColor:'#031b2f'}}>
				<View style={{backgroundColor:'rgba(18,45,71,0.8)',height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
	               <Text style={{color:'#bac7d4'}}>{'模拟交易'}</Text>
	            </View>

	            <View style={{height:800}}>
	                <ScrollableTabView tabBarPosition="top" initialPage={0} page={0} tabBarUnderlineColor={colors.yellow}
	                                   renderTabBar={()=><DefaultTabBar backgroundColor={colors.blue} activeTextColor={colors.yellow} inactiveTextColor={colors.text}/>}>
	                    
	                    <SimulatorTable tabLabel='进行中' data={data} type={'1'}/>

	                    <SimulatorTable tabLabel='已结束' data={data} type={'0'}/>
	                   
	                </ScrollableTabView>
	            </View>
			</View>

			
		);
	}
});

var SimulatorTable = React.createClass({



	OneBasicRow:function(data){
        var item = [data.tradename,data.startdate,data.enddate,data.earning,data.MaxDrawdown];
        if(data.state == this.props.type){
	        return(
	            <TableRow style={{color:'#bac7d4',flex:1}} 
	                content={item} />
	        );        	
        }else{
        	return null;
        }

    },

	render:function(){
		// console.log(this.props.data);
		var tableData = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.data);
		// var tableContent = 
		return(
			<View>
				<TableRow content={['名称','开始时间','结束时间','收益','最大回撤']} />
				<ListView dataSource={tableData} renderRow = {this.OneBasicRow} />
			</View>
		);
	}
});

const colors = {
    yellow:'#ffde00',
    blue:'#031b2f',
    white:'#ffffff',
    text:'#bac7d4'
};

AppRegistry.registerComponent('Simulator', () => Simulator);
module.exports = Simulator;