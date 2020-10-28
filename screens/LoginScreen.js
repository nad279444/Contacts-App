import React,{useState} from "react";
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";

export default function LoginScreen() {
    const[state,setState] = useState({
        email: '',
        password: ''
    })
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../assets/benjamin.jpg")} style={styles.image} />
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.textHeader}>Email</Text>
          <TextInput
          style={styles.input} 
          textAlign="right" 
          maxLength={30}
          keyboardType='email-address'
          value={state.email}
          onChangeText={(email) => {
             setState({...state,email})
          }}/>
        </View>
        <View>
          <Text style={styles.textHeader}>Password</Text>
          <TextInput
          style={styles.input} 
          textAlign="right"
          secureTextEntry={true}
          maxLength={30} 
          value={state.password}
          onChangeText={(password) => {
              setState({...state,password})
          }}/>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN </Text>
      </TouchableOpacity>
      <View style={styles.lastTextContainer}>
          <Text>Forget?</Text>
          <Text style={styles.reset}>Reset Password</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginHorizontal: 20,
    marginTop: 20,
    
  },
  image: {
    width: 370,
    height: 200,
    flex: 1
  },
  textHeader: {
    position: "absolute",
    top: 20,
    left: 20
  },
  inputContainer: {
    marginTop: 50,
    flex:1
  },
  button: {
      width: 320,
      height: 40,
      backgroundColor: 'red',
      marginTop: 50,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      flex: 1
      
  },
  buttonText: {
      color: 'white',
      fontSize: 20
  },
  lastTextContainer: {
      flexDirection: 'row',
      marginTop: 60,
      marginHorizontal: 20,
      justifyContent: 'flex-start'
  },
  reset: {
      marginLeft: 10,
      borderBottomColor: 'red',
      borderBottomWidth: 2
  }
});
