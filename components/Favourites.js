import  React,{useContext} from 'react';
import { Text, View, StyleSheet, Image,ScrollView,Pressable } from 'react-native';
import {
  AppContext,
} from '../App';


const Favourites = ({navigation}) => {
  const store = useContext(AppContext);
  const favourites = store.state.favourites;
  console.log(favourites);
  return(
      <View style={styles.favComponent}>
        <ScrollView style={styles.scrollView} >
         { favourites.map((p) => (
            <View style={styles.product}>
              <View style={styles.upper}>
              <Image source={{uri : p.img}} style={{width: '100%', height: '100%', borderRadius: 10}}/>
              </View>

              <View style={styles.lower}>
                <Text style={styles.name}>{p.name}</Text>
               
                <Pressable onPress={() => {store.dispatch({
                  type: 'REMOVE_FROM_FAVOURITES',
                  payload: {
                    pid: p.id,
                  }
                })}}>
                  <Text style={styles.removeButton}>Remove</Text>
                  </Pressable>
              </View>

          </View>
          ))}
          
      </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  product: {

   borderColor:'black',
      borderWidth:2,
      height:400,
      borderRadius:10,
      marginBottom:20,
      shadowOffset:{width:10,height:10},
      shadowRadius:10,
      flexDirection:'column'

  },
   favComponent: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  upper:{
     flex:8,
     backgroundColor:'pink',
     borderTopLeftRadius:10,
      borderTopRightRadius:10
  },
  lower:{
flex:2,
  backgroundColor:'gold',
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10
  },
   name:{
   fontSize:20,
  textAlign:'center',
   fontWeight:'bold'
 },
 
  removeButton: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    width: '50%',
    marginTop: 10,
  }
});

export default Favourites;

