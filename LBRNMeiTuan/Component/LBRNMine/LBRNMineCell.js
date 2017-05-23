/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';
var width = require('Dimensions').get('window').width;
var LBRNMineCell = React.createClass({
        getDefaultProps(){
            return{
                iconLeftString:'',
                title:'',
                arrowString:'',
                rightImageString:'',
                rightText:''
            }
        },
        render(){
            return (
                <View style={{backgroundColor:'#DCDCDB'}}>
                   <TouchableOpacity style={styles.cellStyle} onPress={()=>{AlertIOS.alert(this.props.title)}}>
                     <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.iconLeftString}} style={styles.leftIconStyle}/>
                        <Text style={{marginLeft:10,fontSize:16}}>{this.props.title}</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                        {/*添加图片或者文字*/}
                        {this.addTextMethod()}
                        {this.addImageMethod()}
                        <Image source={{uri:this.props.arrowString}} style={styles.arrowStringStyle}/>
                     </View>
                   </TouchableOpacity>
                </View>
            );
        },
        addTextMethod(){
            if (this.props.rightText.length >0){
                return(
                    <Text style={{color:'red',marginRight:10}}>{this.props.rightText}</Text>
                )
            }
        },
        addImageMethod(){
            if (this.props.rightImageString.length >0){
                return(
                    <Image source={{uri:this.props.rightImageString}} style={{width:30,height:16,marginRight:10}}/>
                )
            }
        }
    }
)


const styles = StyleSheet.create({
    cellStyle:{
        width:width,
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        padding:10,
        borderBottomColor:'#DCDCDB',
        borderBottomWidth:0.5
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftIconStyle:{
        width:34,
        height:34,
        borderRadius:17
    },
    arrowStringStyle:{
            width:8,
            height:13
    }
});

module.exports = LBRNMineCell;
