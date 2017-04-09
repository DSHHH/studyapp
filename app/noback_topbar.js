//这是无返回键的标题栏组件，this.props.text这里是显示传入进来的要显示的文本，如果没有传入text属性，则默认显示"标题头"。
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default class Topbar extends Component {
  render() {
  	console.log('调试');
    return (
    	<View style={styles.container}>
    		<Text style={styles.top}>{this.props.text||'标题头'}</Text>
    	</View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	
    //flex: 1,
    //flexDirection:'row',
    
    alignItems: 'stretch',
    //alignSelf:'stretch',
  },
  top: {
  	backgroundColor:'#00B7FF',
    fontSize: 25,
    textAlign: 'center',
    //margin: 10,
    color:'white',
    paddingTop:30,
    paddingBottom:10,

  },
});
