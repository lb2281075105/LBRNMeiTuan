
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
    ListView,
    Image
} from 'react-native';
var width = require('Dimensions').get('window').width;
let imageWH=width/5.0;
var LBRNHomeTopListView = React.createClass({
    getDefaultProps(){
        return{
           dataArray:[]
        }
    },
    getInitialState(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return{
            dataSource : ds.cloneWithRows(this.props.dataArray)
        }
    },
    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.contentStyle}
                    scrollEnabled={false}//设置ListView不滑动
                />

            </View>
        )
    },
    //cell
    renderRow(rowData){
        return(
            <View style={{width:imageWH,height:imageWH,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:rowData.image}} style={{width:imageWH - 20,height:imageWH - 20}}/>
                <Text>{rowData.title}</Text>
            </View>
        )
    }
})
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    // 要使ListView换行,要设置ListView宽度
    contentStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    }
})
module.exports = LBRNHomeTopListView;





