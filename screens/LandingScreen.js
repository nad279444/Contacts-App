import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LandingScreen({ navigation }) {
  return (
    <View>
      <Image
        source={require("../assets/damir.jpg")}
        style={styles.LandingImage}
      />
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
  LandingImage: {
    width: 400,
    height: 400,
  },
  WelcomeTextContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  WelcomeText: {
    fontSize: 18,
    color: "#57554c",
  },
  bottomTextContainer: {
    flexDirection: "row",
    marginTop: 130,
  },
  registerText: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginHorizontal: 20,
    color: "#57554c",
    fontSize: 12,
  },
  signInText: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginLeft: 200,
    color: "#57554c",
    fontSize: 12,
  },
  helpText: {
    color: "#b3b1aa",
    marginHorizontal: 20,
  },
});
