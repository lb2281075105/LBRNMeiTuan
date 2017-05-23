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
    Navigator,
    Platform,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

var width = require('Dimensions').get('window').width;

var LBRNCellComponent = React.createClass({

    render(){
        return(
            <View  style={styles.container}>
                <Text style={{color:'white',fontSize:18,marginTop: 25}}>{
                    '设置'}</Text>
                <TouchableOpacity style={{position:'absolute',left:15,marginTop:17}} onPress={()=>this.navBackMethod()}>
                    <Image source={{uri:'navigationbar_arrow_up.png'}} style={{width:13,height:18,marginTop:10}}></Image>
                </TouchableOpacity>
            </View>
        )
    },
    navBackMethod(){
        this.props.navigator.pop()
    }
})
const styles = StyleSheet.create({

    container:{
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#FB6320',
        flexDirection:'row',
        justifyContent:'center'
    }
})
module.exports=LBRNCellComponent;

