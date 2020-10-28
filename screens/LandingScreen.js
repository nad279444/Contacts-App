import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
      <Image
        source={require("../assets/damir.jpg")}
        style={styles.LandingImage}
      />
      </View>
     
      <View style={styles.WelcomeTextContainer}>
        <Text style={styles.WelcomeText}>
          KEEP IN TOUCH WITH THE PEOPLE OF{" "}
        </Text>
        <Text style={styles.WelcomeText}>CODETRAIN</Text>
      </View>
      <Text style={styles.helpText}>
        {" "}
        Sign in or register with your Codetrain email
      </Text>
      <View style={styles.bottomTextContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Sign In')} >
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageContainer: {
    flex: 2
  },
  LandingImage: {
    width: 400,
    height: 400,
  },
  WelcomeTextContainer: {
    paddingTop: 40,
    marginVertical: 10,
    marginHorizontal: 20,
    flex: 0.2
  },
  WelcomeText: {
    fontSize: 18,
    color: "#57554c",
  },
  bottomTextContainer: {
    flexDirection: "row",
    marginTop: 120,
    flex: 0.3
  },
  registerText: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginHorizontal: 20,
    color: "#57554c",
    fontSize: 14,
  },
  signInText: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginLeft: 180,
    color: "#57554c",
    fontSize: 14,
  },
  helpText: {
    color: "#b3b1aa",
    marginHorizontal: 20,
    paddingTop: 10,
    flex: 0.1
    
  },
});
