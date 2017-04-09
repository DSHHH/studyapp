//使用无返回键的标题栏组件传入text属性值
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  FormInput,
} from 'react-native-elements';
//import Topbar from './noback_topbar';
import User_button from './button';
export default class Register extends Component {
  static navigationOptions = {
    title: '注册',
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
      	<View style={styles.input_container}>
		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请输入用户名'}
		onChangeText={(userName)=>this.setState({userName})}placeholderTextColor='#CCCCCC'/>
		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请输入密码'}
		onChangeText={(userName)=>this.setState({userName})}placeholderTextColor='#CCCCCC'/>
		<FormInput containerStyle={styles.input} inputStyle={styles.input2}placeholder={'请确认密码'}
		onChangeText={(Text)=>this.setState({passWord:Text})}placeholderTextColor='#CCCCCC'
		secureTextEntry={true}/>
        </View>

        <User_button title='注册' onPress={()=>navigate('Findpassword')}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  input_container:{
    //flex:0,
    marginTop:20,
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
  	//underlineColorAndroid:'transparent',这是属性，应该直接在标签内设置
  	bottom:-3,
  },
});

