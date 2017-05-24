/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
///封装购物中心的小组件
var width = require('Dimensions').get('window').width;
var LBRNHomeShopCenterView = React.createClass({
    getDefaultProps(){
        return{
            dataArray:[]
        }
    },
    getInitialState(){
        let dataSource = new ListView.DataSource({rowHasChanged:(row1,row2) => row1 !== row2});
        return{
            dataSource:dataSource.cloneWithRows(this.props.dataArray)
        }
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderCenterRow}
                contentContainerStyle={styles.contentStyle}
            />

        )
    },
    //cell
    renderCenterRow(rowData,sectionID,rowID){
        var imageMarginRight = 0;

        if (this.props.dataArray.length-1 == rowID){
            imageMarginRight = 10;
        }
        return(
            <View >
                <View style={styles.container}>
                    <Image source={{uri:rowData.img}} style={{width:130,height:97,borderRadius:10,marginRight:imageMarginRight}}/>
                    <Text style={{color:'white',position:'absolute',bottom:20,backgroundColor:'red',fontSize:16}}>{rowData.showtext.text}</Text>

                </View>

                <View >
                    <Text style={{fontSize:14,fontWeight:'bold', color:'#bbb',marginTop:5,marginLeft:10,marginBottom:5}}>{rowData.name}</Text>
                </View>
            </View>
        )
    }
})
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginLeft:10
    },
    contentStyle:{
        flexDirection:'row',
    }
})
module.exports=LBRNHomeShopCenterView;

