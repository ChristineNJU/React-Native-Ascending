import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
var {height,width} = Dimensions.get('window');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableHighlight,
    } = require('react-native');
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

var TableRow = require('../components/TableRow');

var UserCenter = React.createClass({

	_logout:function(){
		this.props.parentRef.setState({hasLogged:0});
	},

	render:function(){

		var user = this.props.userInfo;
		// console.log('in UserCenter Render');
		// console.log(user);
		console.log(Dimensions);
		// console.log(windowHeight);
		return(
			<View style={{width:width,height:height,backgroundColor:'#031b2f',alignItems:'center',justifyContent:'center'}}>
				<Text style={[styles.text]}>{'id:'}{user.UserId}</Text>

				<Text style={[styles.text]}>{'name:'}{user.UserName}</Text>

				<TouchableHighlight onPress={this._logout.bind(this)}>
					<Text style={[styles.text,{marginTop:30}]}>{'退出登录'}</Text>
				</TouchableHighlight>
			</View>

			
		);
	}
});

var styles = StyleSheet.create({
	text:{
		color:'#bac7d4',
		width:width,
		textAlign:'center',
	}
});

AppRegistry.registerComponent('UserCenter', () => UserCenter);
module.exports = UserCenter;