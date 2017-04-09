//使用无返回键的标题栏组件传入text属性值
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {
  Button,
  Icon,
  IconButtons,
  FormLabel, 
  FormInput,
  SocialIcon
} from 'react-native-elements';
//import Topbar from './noback_topbar';
import User_button from './button';
export default class Findpassword extends Component {
  static navigationOptions = {
    title: '重置密码',
  };
	constructor(props) {
    super(props);
    this.state = {
    	userName:'',
    	passWord:''
    };
	}
  render() {

    const {navigate}=this.props.navigation;
  	//console.log('调试');
    return (
      <View style={styles.container}>

		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请输入手机号'}
		onChangeText={(userName)=>this.setState({userName})}placeholderTextColor='#CCCCCC'/>

		<View style={{flexDirection:'row',justifyContent:'space-around'}}>
		<FormInput containerStyle={styles.c_input} inputStyle={styles.input2}placeholder={'请输入验证码'}
		onChangeText={(Text)=>this.setState({passWord:Text})}placeholderTextColor='#CCCCCC'/>
		<Button buttonStyle={styles.yzm_button} textStyle={{color:'black',fontSize:15}}title='发送验证码' backgroundColor='white'/>
		</View>
		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请输入新密码'}
		onChangeText={(Text)=>this.setState({passWord:Text})}placeholderTextColor='#CCCCCC'
		secureTextEntry={true}/>
        
        <User_button title='确认' onPress={()=>navigate('Home')}/>
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
  c_input:{
  	height:45,
  	marginTop:15,
  	marginLeft:103,
  },
  input:{
  	//borderWidth:1,
  	//borderColor:'green',
  	height:45,
  	//underlineColorAndroid:'transparent',
  	marginTop:15,
  },
  input2:{
  	fontSize:20,
  	borderColor:'red',
  	//underlineColorAndroid:'transparent',这是属性，应该直接在标签内设置
  	bottom:-3,
  },
  textstyle:{	//button的fontsize属性必须在此设置
  	fontSize:25,
  	fontWeight:'bold',
  },
  yzm_button:{
  	marginRight:105,
  	paddingLeft:30,
  	paddingRight:30,
  	marginTop:7,
  	marginBottom:7,
  	borderWidth:1,
  	borderColor:'#00CA21',
  	borderRadius:10,
  },
  buttonstyle:{
  	padding:10,
  	marginTop:50,
  },
});

