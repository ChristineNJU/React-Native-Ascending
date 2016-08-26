import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
    } = require('react-native');

//class StockSingle extends Component {
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
        return(
            <View>
                <View style={styles.basicInfo}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('./img/1.png')} resizeMode={'contain'} style={[styles.industryIcon]}/>
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
                    <View>

                    </View>
                </View>
            </View>
        )
    }
});

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
    industryIcon:{
        width:60,
        height:60
    }
});

AppRegistry.registerComponent('StockSingle', () => StockSingle);
module.exports = StockSingle;