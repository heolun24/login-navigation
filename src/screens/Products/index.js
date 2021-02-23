import React, { PureComponent } from 'react';
import {Text, View, StyleSheet,TouchableOpacity } from 'react-native';

function Products(){
    return(
        <View style={styles.waper}>
           <Text>hello</Text>
         <TouchableOpacity 
      
      style={styles.bt}
      onPress={() => navigation.navigate('Login')}
      
      >
        <Text style={styles.tlg}>Quay lai</Text>
      </TouchableOpacity>
        </View>

    );
}


const styles =StyleSheet.create({
    waper:{
        flex:1,
       justifyContent:'center',
       alignItems:'center'
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

export default Products