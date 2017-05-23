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
    Image
} from 'react-native';


var LBRNMain = require('../../LBRNMain');

var LBRNLaunchImage = React.createClass({

    render(){
        return(

            <Image source={{uri:'welcome.png'}} style={styles.container} />
        )
    },
    //增加定时器、请求网络数据
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                component:LBRNMain
            })
        },1000)
    }

})

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})

module.exports=LBRNLaunchImage;
