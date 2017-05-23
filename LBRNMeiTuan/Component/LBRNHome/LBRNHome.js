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
    Platform
} from 'react-native';

var width = require('Dimensions').get('window').width;
var LBRNHome = React.createClass({
        render(){
            return (
                <View style={styles.container}>
                    <View style={styles.homeStyleStyle}>
                        <Text style={{color: 'white',fontSize:18,marginTop:28}}>首页</Text>
                    </View>

                </View>
            );
        }
    }
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    homeStyleStyle:{
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#FB6320',
        alignItems:'center'
    }
});

module.exports = LBRNHome;
