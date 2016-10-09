import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
var {height,width} = Dimensions.get('window');
var ScrollableTabView = require('react-native-scrollable-tab-view');
import TabNavigator from 'react-native-tab-navigator';
var StockSingle = require('./js/pages/StockSingle');
var StockList = require('./js/pages/StockList');
var Simulator = require('./js/pages/Simulator');
var UserCenter = require('./js/pages/UserCenter');
// var LogIn = require('./js/pages/LogIn');
import {AppRegistry, Text, TouchableHighlight,StyleSheet, View,Image,Navigator,TextInput} from 'react-native';
var urls = require('./js/datas/Urls');



var Ascending = React.createClass( {

    getInitialState:function() {
        // super(props);
        return{
            selectedTab:"股票池",
            stockPools:[],
            simulators:[],
            userInfo:{},
            loading1:1,
            loading2:1,
            hasLogged:0,
            log_id:'',
            log_pw:'',
        }
    },
    componentWillMount:function(){
        // this.fetchStockPool();
        // this.fetchSimulators();
    },
    fetchStockPool:async function(){
        await fetch(urls.stockPool+this.props.userid)
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                stockPools:responseData.stockPools,
                loading1:0,
            });
        }).catch((error)=>{
            console.error(error);
        });
    },
    fetchSimulators:async function(){
        await fetch(urls.simulators+this.props.userid)
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                simulators:responseData.simulator_list,
                userInfo:responseData.userInfo,
                loading2:0,
            });
            console.log(this.state.userInfo);
        }).catch((error)=>{
            console.error(error);
        });
    },
    _login:async function(){
        console.log('in login');
        await fetch(urls.login+this.state.log_id+('&&pw=')+this.state.log_pw)
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData.success);
            if(responseData.success == 'true'){
                console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh');
                this.setState({
                    hasLogged:1,
                });
                this.fetchStockPool();
                this.fetchSimulators();
            }
        }).catch((error)=>{
            console.error(error);
        });
    },
    logout:function(){

    },
    render:function() {

        let defaultName = 'FirstPageComponent';
        console.log('in render');
        console.log(this.state.hasLogged);

        if(this.state.hasLogged == 0){
            return (
                <View style={{width:width,height:height,backgroundColor:'#031b2f',alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('./img/index_logo.png')} resizeMode={'contain'} style={{width:150,height:150,flex:0,marginBottom:50}} />
                    <Text style={[styles.text]}>用户id</Text>
                    <TextInput style={{width:200,borderColor:'#bac7d4'}}
                        onChangeText={(text) => this.setState({log_id:text})} />

                    <Text style={[styles.text]}>密码</Text>
                    <TextInput style={{width:200}}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({log_pw:text})} />

                    <TouchableHighlight onPress={this._login.bind(this)}
                        style={styles.button_outer}>
                        <Text style={[styles.button_login]}>登录</Text>
                    </TouchableHighlight>
                </View>
            )
        }else if(this.state.hasLogged == 1){
            if(this.state.loading1 == 1 || this.state.loading2 == 1){
                return <Text>{"Loading Now!"}</Text>
            }else{

                let StockPool = StockList;  

                return(
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === "股票池"}
                            title="股票池"
                            renderIcon={() => <Image source={require('./img/list.png')} style={[styles.tabIcon]}/>}
                            renderSelectedIcon={() => <Image source={require('./img/list.png')} style={[styles.tabIcon]}/>}
                            onPress={() => this.setState({ selectedTab: "股票池" })}>

                            <Navigator
                                initialRoute={{ name: defaultName, component: StockPool}}
                                configureScene={(route) => {
                                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                                }}
                                renderScene={(route, navigator) => {
                                    let Component = route.component;
                                    return <Component {...route.params} StockPools={this.state.stockPools} navigator={navigator} />
                                }} />

                        </TabNavigator.Item>
                        
                        <TabNavigator.Item
                            selected={this.state.selectedTab === "模拟"}
                            title="模拟"
                            renderIcon={() => <Image source={require('./img/time.png')} style={[styles.tabIcon]}/>}
                            renderSelectedIcon={() => <Image source={require('./img/time.png')} style={[styles.tabIcon]}/>}
                            onPress={() => this.setState({ selectedTab: '模拟' })}>
                            <Simulator simulators={this.state.simulators} />
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            selected={this.state.selectedTab === "个人"}
                            title="个人"
                            renderIcon={() => <Image source={require('./img/user.png')} style={[styles.tabIcon]}/>}
                            renderSelectedIcon={() => <Image source={require('./img/user.png')} style={[styles.tabIcon]}/>}
                            onPress={() => this.setState({ selectedTab: '个人' })}>
                            <UserCenter userInfo={this.state.userInfo} parentRef={this}/>
                        </TabNavigator.Item>
                    </TabNavigator>
                )
            }
        }
    },
});

var styles = StyleSheet.create({
    text:{
        color:'#bac7d4',
        width:200,
        textAlign:'left',
    },
    button_outer:{
        marginTop:30,
        width:200,
        height:30,
        backgroundColor:'#ffde00',
        alignItems:'center',
        justifyContent:'center',
    },
    button_login:{
        textAlign:'center',
        color:'#fff',
    },
    tabIcon:{
        width:20,
        height:20,
    }
});

AppRegistry.registerComponent('Ascending', () => Ascending);
module.exports = Ascending;