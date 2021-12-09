import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../App';

const FoodItemRecipe = ({ route }) => {
  const store = useContext(AppContext);
  const isAddedToFav =
    store?.state?.favourites.filter((item) => item.id === route.params.id)
      .length > 0;
  return (
    <ScrollView style={styles.productInfo}>
      <Card containerStyle={{ height: 300, margin: 0 }}>
        <Card.Title style={{ fontSize: 20 }}>{route?.params?.name}</Card.Title>
        <Card.Divider />
        <View style={styles.imgContainer}>
          <Image source={{ uri: route?.params?.img }} style={styles.image} />
        </View>
      </Card>
      <Pressable
        onPress={() => {
          store.dispatch({
            type: 'ADD_TO_FAVOURITES',
            payload: route.params,
          });
        }}>
        <Text style={isAddedToFav ? styles.btn : styles.favBtn}>
          {isAddedToFav ? 'Added' : 'Add to favourites'}
          <Icon name={isAddedToFav ? 'check' : 'heart'} size={25} />
        </Text>
      </Pressable>
      <View style={styles.aboutContainer}>
        <Text style={styles.infoheader}>Ingredients</Text>
        <Text style={styles.infoText}>{route?.params?.ingredients}</Text>
        <Text style={styles.infoheader}>Recipe</Text>
        <Text style={styles.infoText}>{route?.params?.recipe}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    height: 210,
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  favBtn: {
    backgroundColor: '#007bff',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  productInfo: {
    flex: 1,
    //backgroundColor:'grey',
    padding: 15,
  },
  infoheader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gold',
  },
  infoText: {
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  aboutContainer: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});
export default FoodItemRecipe;
