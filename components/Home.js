import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { SearchBar } from "react-native-elements";

import { foodItems } from "../Constant";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.home}>
      <View style={styles.header}>
      
        <StatusBar barStyle="light-content" backgroundColor="#FFBF00" />
        <SearchBar
          placeholder="Search for food item"
          onChangeText={(value) => setSearch(value)}
          value={search}
          onClear={() => setSearch("")}
          containerStyle={{
            backgroundColor: "#FFBF00",
            borderRadius: 0,
          }}
          inputContainerStyle={{
            backgroundColor: "white",
            color: "white",
          }}
        />
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {foodItems.map((p) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Food Item Recipe", p);
              }}
              android_ripple={{ color: "grey", borderless: true }}
            >
              <View style={styles.foodItem}>
                <View style={styles.upper}>
                  <Image
                    source={{ uri: p.img }}
                    style={{ height: "100%", width: "100%", borderRadius: 10 }}
                  />
                </View>

                <View style={styles.lower}>
                  <Text style={styles.name}>{p.name}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.3,
    // borderColor:'black',
    //  borderWidth:2,
  },
  container: {
    flex: 9,
  },
  foodItem: {
    borderColor: "black",
    borderWidth: 2,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    flexDirection: "column",
  },
  upper: {
    flex: 8,
    backgroundColor: "pink",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lower: {
    flex: 2,
    backgroundColor: "gold",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  name: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default Home;
