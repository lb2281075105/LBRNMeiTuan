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
    Platform,
    Image,
    TextInput,
    TouchableOpacity,
    AlertIOS,
    ScrollView
} from 'react-native';

var width = require('Dimensions').get('window').width;

import LBRNHomeTopView from './LBRNHomeTopView.js';
//var LBRNHomeTopView = require('./LBRNHomeTopView');

var LBRNHome = React.createClass({
        render(){
            return (
                <View style={styles.container}>
                    {/*导航栏设置*/}
                    {this.renderHomeNavbar()}
                    {/*上部滑动组件*/}
                    {this.renderTopView()}
                </View>
            );
        },
        renderHomeNavbar(){
            return(
                <View style={styles.homeStyle}>
                    <TouchableOpacity onPress={()=>{AlertIOS.alert('济南')}}>
                        <Text style={{color:'white',fontSize:16,marginLeft:10,fontWeight:'bold'}}>济南</Text>
                    </TouchableOpacity>

                    <TextInput style={styles.textInputStyle}
                               placeholder={'输入商家，品类，商圈'}
                               placeholderTextColor={'#bbb'}
                               underlineColorAndroid='white'
                               returnKeyType='search'
                    />
                    <Image source={{uri:'icon_homepage_message'}} style={[styles.toolBarIcon,{marginTop:3}]}/>
                    <Image source={{uri:'icon_homepage_scan'}} style={[styles.toolBarIcon,{marginRight:10,marginTop:5}]}/>
                </View>
            )
        },
        renderTopView(){
            return(
                 // 底部如果是ScrollView,那么根节点就是ScrollView,不要把根节点设置为View
                 <ScrollView>
                    <LBRNHomeTopView

                    />
                 </ScrollView>
            )
        }
    }
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    homeStyle:{
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#FB6320',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textInputStyle:{
        width:width*0.6,
        height:35,
        backgroundColor:'white',
        borderRadius:18,
        paddingLeft:14,
        marginTop:18
    },
    toolBarIcon:{
        width:30,
        height:30
    }
});

module.exports = LBRNHome;
