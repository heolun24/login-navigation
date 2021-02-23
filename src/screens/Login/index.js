import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

function Login({navigation}) {
  return (
    <View style={styles.waper}>
        <Image 
          source={require('../../img/logo.png')}
          style={styles.image}
         ></Image>
      <TextInput
       style={[styles.input, styles.username]}
       placeholder='Tên đăng nhập'
       ></TextInput>
      <TextInput 
      style={styles.input}
       placeholder='Mật khẩu'
       secureTextEntry
      ></TextInput>

      <TouchableOpacity 
      
      style={styles.bt}
      onPress={() => navigation.navigate('Products')}
      
      >
        <Text style={styles.tlg}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
 
  input:{
     width: 330,
    height: 40,
    backgroundColor: '#f5f5dc',
    borderRadius:7,
    fontSize:17,
    paddingHorizontal:10,
    
  },
    username:{marginBottom:10},
    image:{
      width:300,
      resizeMode:'contain',
    },
    bt:{
       width: 100,
       height: 40,
      borderRadius:7,
      backgroundColor:'#ff0000',
      marginTop:40,
      justifyContent:'center',
      alignItems:'center'
    },
    tlg:{
        color:'#ffffff',
        fontSize:17,
        fontWeight:'bold',

    }
});

export default Login;
