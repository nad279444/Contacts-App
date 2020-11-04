import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Entypo, Fontisto, Feather, EvilIcons } from "@expo/vector-icons";

export default function Member() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <View>
              <Image source={require("../assets/img3.jpg")} style={styles.image} /> 
          </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.Text}> Ben</Text>
          <Text style={styles.TechText}> Tech Lead </Text>
        </View>
      </View>

      <View style={styles.mediaContainer}>
        <Entypo name="twitter-with-circle" size={24} color="black" />
        <View style={styles.in}><Entypo name="linkedin-with-circle" size={24} color="black" /></View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Feather name="phone" size={20} color="black" />
          <Text style={styles.Text}>+233 (244) 234 1234</Text>
        </View>
        <View style={styles.icon}>
          <Fontisto name="email" size={20} color="black" />
          <Text style={styles.Text}> Zak@codetrain.co</Text>
        </View>
        <View style={styles.icon} >
          <EvilIcons name="location" size={20} color="black" />
          <Text style={styles.Text}> Shoriditch,Uk</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 45,
  },
  imageContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    
  },
  textContainer: {
    flexDirection: "column",
  },
  mediaContainer: {
      flexDirection: 'row',
      flex: 0.1,
      
  },
  icon: {
      flexDirection: 'row',
      flex: 0.3
  },
  iconContainer: {
    flex: 0.3
  },
  Text: {
      paddingHorizontal: 10
  },
  TechText: {
    paddingHorizontal: 10,
    color: 'grey'
},
in: {
    paddingHorizontal: 5
}
 
});
