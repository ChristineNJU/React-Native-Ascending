import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    Text,
    View,
    ListView,
    Picker,
    TouchableOpacity
    } = require('react-native');
var StockSingle = require('./StockSingle');
var TableRow = require('../components/TableRow');
var urls = require('../datas/Urls');

var StockList = React.createClass({

	 _pressButton: function(stockInfo,e) {
        const { navigator } = this.props;
        var info = stockInfo;
        // console.log(stockInfo);
        // console.log('_pressButton');
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: StockSingle,
                params: {
                    id: info
                }
            })
        }
    },

	getDefaultProps: function(){
       return {
       		stocks:{
       			1:['sh600000','sh600004','sh600005'],
       			2:['sh600006','sh600007','sh600008'],
       		},
            userid:'2',
       		
       };
    },

    getInitialState: function(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        return{
            stocks:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            stockPools:{},
        };
    },

    loadData: async function(){
        await fetch(urls.stockPool+this.props.userid)
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                stockPools:this.state.stocks.cloneWithRows(responseData.stockPools);
            });
        }).catch((error)=>{
            console.error(error);
        });
    },
    favorRow:function(stockInfo){
    	// console.log(stockInfo);
    	return(
    		<TouchableOpacity onPress={this._pressButton.bind(this,stockInfo)}
    			style={{paddingLeft:10,paddingRight:10}}>
				<Text style={{color:'#bac7d4'}}>{stockInfo}</Text>
			</TouchableOpacity>
    	)
    },

	render:function(){

		// console.log(this.state.stocks);
        var PickerItems = this.state.

		return(
			<View style={{backgroundColor:'#031b2f'}}>
				<View style={{backgroundColor:'rgba(18,45,71,0.8)',height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
	                <Picker style={{color:'#bac7d4',width:150}}
						selectedValue={this.state.language}
						onValueChange={(id) => 
							this.setState({stocks: this.state.stocks.cloneWithRows(this.props.stocks[id])})}>
						<Picker.Item label="股票池1" value="1" />
						<Picker.Item label="股票池2" value="2" />
					</Picker>
	            </View>
	            

                <TableRow content={['股票','昨收','今开']} />
				<ListView
                    dataSource={this.state.stocks}
                    renderRow={this.favorRow} />
			</View>
		)

	},
});

AppRegistry.registerComponent('StockList', () => StockList);
module.exports = StockList;