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
    flex: 1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  titleContainer: {
      alignItems: 'center',
  },
  titleText: {
      fontSize: 28,
      fontWeight: '100',
      color:'#57554c' 
  },
  bottomTextContainer: {
      borderBottomWidth: 2,
      borderBottomColor: "red",
      alignItems: 'center',


  },
  bottomText: {
      color: '#57554c'
  }

});
