import React from "react";
import { View, StyleSheet, Image,Text,TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={require("../assets/codetrain.png")} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Codetrain </Text>
        <Text style={styles.titleText} > Contacts </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LandingPage')}style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>GET STARTED</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 150,
    flex: 1
  },
  titleContainer: {
      alignItems: 'center',
      marginTop: 100,
      flex: 1
  },
  titleText: {
      fontSize: 28,
      fontWeight: '100',
      color:'#57554c' 
  },
  bottomTextContainer: {
      borderBottomWidth: 2,
      borderBottomColor: "red",
      marginTop: 250,
      alignItems: 'center',


  },
  bottomText: {
      color: '#57554c'
  }

});
