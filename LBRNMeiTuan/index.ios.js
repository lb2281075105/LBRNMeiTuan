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
    Navigator
} from 'react-native';


var LBRNLaunchImage = require('./Component/LBRNLaunchImage/LBRNLaunchImage');

var MeiTuan = React.createClass({

    render(){
        return(
            <Navigator
                initialRoute={{name:'启动页',component:LBRNLaunchImage}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        )
    }
})
AppRegistry.registerComponent('MeiTuan', () => MeiTuan);

