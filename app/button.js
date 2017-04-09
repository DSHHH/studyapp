//使用无返回键的标题栏组件传入text属性值
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Icon,
  IconButtons,
} from 'react-native-elements';
import Topbar from './noback_topbar';
export default class User_button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button buttonStyle={styles.buttonstyle} textStyle={styles.textstyle} title={this.props.title}
        backgroundColor='#00CA21' onPress={this.props.onPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	
    //flex: 1,
    //flexDirection:'row',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  textstyle:{	//button的fontsize属性必须在此设置
  	fontSize:22,
  	fontWeight:'bold',
  },
  buttonstyle:{
  	//alignSelf:'stretch',
  	marginTop:50,
  	//width:200,
  	borderRadius:10, 
  	marginLeft:50,
  	marginRight:50,
  },
});

