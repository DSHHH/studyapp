//使用无返回键的标题栏组件传入text属性值
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import {
  Button,
  Icon,
  IconButtons,
  FormLabel, 
  FormInput,
  SocialIcon
} from 'react-native-elements';
import Topbar from './noback_topbar';
export default class Index extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	userName:'',
    	passWord:''
    };
	}
  render() {
  	console.log('调试');
    return (
      <View style={styles.container}>
        <Topbar text='首页'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'stretch',
  },
});

