import React, { Component, PropTypes } from 'react';
var {
    StyleSheet,
    Text,
    View,
    Image
    } = require('react-native');

var Title = React.createClass({
    render:function(){
        // console.log('11111');
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
        marginTop:5,
        marginBottom:5,
        paddingLeft:10,
        flexDirection:'row',
        alignItems:'center',
        height:20
    },
    titleIcon:{
        width:20
    },
    titleText:{
        paddingLeft:10,
        color:'#ffde00',
        fontSize:14
    }
});

module.exports = Title;
