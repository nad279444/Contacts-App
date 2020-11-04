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
        <Text style={styles.helpText}>
          Sign in or register with your Codetrain email
        </Text>
        </View>
  
      <View style={styles.bottomTextContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageContainer: {
    flex: 0.8,
  },
  LandingImage: {
    width: 400,
    height: 400,
  },
  WelcomeTextContainer: {
    alignItems: 'center',
    flex: 0.4,
  },
  WelcomeText: {
    fontSize: 18,
    color: "#57554c",
    alignSelf: 'flex-start',
    paddingLeft: 20
    
  
  },
  bottomTextContainer: {
    flexDirection: "row",
    flex: 0.1,
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
    alignSelf: "flex-start",
    paddingLeft: 20
  },
});
