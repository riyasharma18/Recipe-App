import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const logout = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Image style={styles.imggy} source ={require('../assets/logout1.png')}/>
       <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
            onPress={() =>  {navigation.navigate('login')}}>
        
          <Text style={styles.texty}>Log out</Text>
        </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:20,
    marginRight:10

  },
  texty:{
   
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  buttonStyle:{
     justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  imggy:{
    height:50,
    width:50,
    justifyContent:'center',
     marginLeft:120,
    marginRight:10
  }
 
});
export default logout;