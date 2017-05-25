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
    Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

//获取首页,电商,我的,更多文件
var LBRNHome = require('./Component/LBRNHome/LBRNHome');
var LBRNEB = require('./Component/LBRNEB/LBRNEB');
var LBRNMine = require('./Component/LBRNMine/LBRNMine');
var LBRNMore = require('./Component/LBRNMore/LBRNMore');

var LBRNMain = React.createClass({

    getInitialState(){
       return {
            selectedTab:'Home'
      }
    },
    render() {
        return (
            <TabNavigator>

                {this.childNavigetor('首页','Home','icon_tabbar_homepage','icon_tabbar_homepage_selected','Home',LBRNHome)}
                {this.childNavigetor('商家','EB','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','EB',LBRNEB)}
                {this.childNavigetor('我的','Mine','icon_tabbar_mine','icon_tabbar_mine_selected','Mine',LBRNMine)}
                {this.childNavigetor('更多','More','icon_tabbar_misc','icon_tabbar_misc_selected','More',LBRNMore)}
            </TabNavigator>
        );
    },

    childNavigetor(title,tabName,normalImage, selectedImage,componentName,component){
        return (
            <TabNavigator.Item
                selectedTitleStyle={styles.selectedTextStyle}
                selected={this.state.selectedTab === tabName}
                title={title}
                renderIcon={() => <Image source={{uri:normalImage}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedImage}} style={styles.iconStyle} />}
                onPress={() => this.setState({ selectedTab: componentName })}>
                <Navigator
                    initialRoute={{ name: componentName, component: component }}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component navigator={navigator} {...route.passProps} />
                    }}
                />

            </TabNavigator.Item>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle:{
        width:28,
        height:28
    },
    selectedTextStyle:{
        color:'#fb6320'

    }


});

module.exports = LBRNMain;
