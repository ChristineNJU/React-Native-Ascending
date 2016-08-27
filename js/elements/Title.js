import React, { Component, PropTypes } from 'react';
var {
    StyleSheet,
    Text,
    View,
    Image
    } = require('react-native');

var Title = React.createClass({
    render:function(){
        return (
        <View style={[styles.title]}>
            <Image style={[styles.titleIcon]} source = {require('../../img/logo_s.png')} resizeMode={'contain'}/>
            <Text style={[styles.titleText]}>{this.props.name}</Text>
        </View>
        );
    }
});

var styles = StyleSheet.create({
    title:{
        paddingLeft:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'red'
    },
    titleIcon:{
        width:25
    },
    titleText:{
        paddingLeft:10,
        color:'#ffde00',
        fontSize:18
    }
});

module.exports = Title;
