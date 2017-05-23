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
    ScrollView,
    Image,
    TouchableOpacity,
    AlertIOS,
    Navigator,
    Switch
} from 'react-native';
var width = require('Dimensions').get('window').width;
var LBRNCellComponent = require('./LBRNCellComponent');
var LBRNMoreCellComponent = React.createClass({
        getDefaultProps(){
            return{
                title:'',
                isShowText:false,
                isShowImage:false,
                imageString:'',
                wenbenString:'',
                isOrSwitch:false
            }
        },
        getInitialState(){
            return{
                trueSwitchIsOn: false
                }

        },
        render(){
            return (
                <View style={styles.container}>
                    {this.childCellMethod()}
                </View>
            );
        },
        childCellMethod(){
            return(
                <TouchableOpacity onPress={()=>this.pressMethod(this.props.title)} disabled={this.props.isOrSwitch}>
                    <View style={styles.cellStyle}>
                        <Text style={{fontSize:18}}>{this.props.title}</Text>
                        {/* 显示文本 */}
                        {this.showTextMethod()}
                    </View>

                </TouchableOpacity>

            )
        },
        pressMethod(title){
            //MARK-----
            //AlertIOS.alert(title);
            // this.props.navigator.push({
            //     component: LBRNCellComponent,
            //     title: 'MoreCellComponent',
            //     passProps: {name:'设置'}
            // });
        },
        showTextMethod(){
           {/* this.props.isShowText.length>0 */}
            if(this.props.isShowText) {

               return(
                   <View style={styles.rightCellStyle}>
                      <Text style={{marginRight: 10,color:'red'}}>{this.props.wenbenString}</Text>
                       {this.showSwitch()}

                   </View>
               )
             }else {
               return(
                   <View style={styles.rightCellStyle}>
                      {this.showImage()}
                      {this.showSwitch()}
                   </View>
            )
          }

        },
        showSwitch(){

            if (this.props.isOrSwitch){
                {/*<Switch value={this.state.isOpen} onValueChange={() =>{this.setState({isOpen:!this.state.isOpen})}}/>*/}
                return(
                    <Switch
                        disabled={false}
                        onValueChange={(value) => {this.setState({trueSwitchIsOn: value})
                          console.log(value)}}
                        value={this.state.trueSwitchIsOn} />
                )
            }else {
                return(
                    <Image source={{uri:'icon_cell_rightarrow'}} style={styles.iconStyle} />
                )
            }

        },
        showImage(){
            if (this.props.isShowImage){
               return(
                   <Image source={{uri:this.props.imageString}} style={{width:30,height:13,marginRight:10}}/>
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
    iconStyle:{
        width:8,
        height:13
    },
    rightCellStyle:{
        flexDirection:'row'
    }
});

module.exports = LBRNMoreCellComponent;
