//使用无返回键的标题栏组件传入text属性值
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Button,
  FormInput,
} from 'react-native-elements';

import Register from './register';

//import Topbar from './noback_topbar';
import User_Button from './button';

export default class Login extends Component {
  //设置标题栏
  static navigationOptions = {
    title: '登录',
  };
	constructor(props) {
    super(props);
    this.state = {
    	userName:'',
    	passWord:''
    };
	}

  /*_pressButton() {
        this.props.navigator.push({
          name:'register',
        });
    }*/
  render() {
    //声明变量
    const {navigate}=this.props.navigation;
  	console.log('调试');
    return (
      <View style={styles.container}>
      	
        <View style={styles.input_container}>
		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请输入用户名'}
		onChangeText={(userName)=>this.setState({userName})}placeholderTextColor='#CCCCCC'/>
		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请输入密码'}
		onChangeText={(Text)=>this.setState({passWord:Text})}placeholderTextColor='#CCCCCC'
		secureTextEntry={true}/>
        </View>
        <User_Button title='登录'/>
        <View style={styles.container_bottom}>
        <TouchableOpacity onPress={() => navigate('Findpassword')}>
          <Text style={styles.bottom_text}>忘记密码？</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.bottom_text}>现在注册</Text>
        </TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input_container:{
    //flex:0,
    marginTop:20,
  },
  container_bottom:{
  	//flex:1,
  	flexDirection:'row',
  	justifyContent:'space-between',
  	margin:10,
  },
  bottom_text:{
    fontSize:17,
    margin:10,
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
  input:{
  	//borderWidth:1,
  	//borderColor:'green',
  	height:45,	
    marginTop:10,
    alignItems:'center',
  },
  input2:{
  	fontSize:20,
    paddingLeft:20,
  	//underlineColorAndroid:'transparent',这是属性，应该直接在标签内设置
  	
  },
});
