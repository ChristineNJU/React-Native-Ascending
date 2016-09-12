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

var UserCenter = React.createClass({
	render:function(){

		var data = [{bdate:'09-30',edate:'10-02',name:'hhh',benefit:30,big:50},
		{bdate:'09-30',edate:'10-02',name:'hhh',benefit:30,big:50}];
		return(
			<View style={{backgroundColor:'#031b2f'}}>
				<View style={{backgroundColor:'rgba(18,45,71,0.8)',height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
	               <Text style={{color:'#bac7d4'}}>{'用户中心'}</Text>
	            </View>

	            <View style={{height:800}}>
	                <ScrollableTabView tabBarPosition="top" initialPage={0} page={0} tabBarUnderlineColor={colors.yellow}
	                                   renderTabBar={()=><DefaultTabBar backgroundColor={colors.blue} activeTextColor={colors.yellow} inactiveTextColor={colors.text}/>}>
	                    
	                    <SimulatorTable tabLabel='进行中' data={data}/>

	                    <Text tabLabel='已结束'>{'已结束'}</Text>
	                   
	                </ScrollableTabView>
	            </View>
			</View>

			
		);
	}
});

AppRegistry.registerComponent('UserCenter', () => UserCenter);
module.exports = UserCenter;