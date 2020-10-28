import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    role: "",
    twitter: "",
    linkedin: "",
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name="user" size={100} color="red" />
        <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.textHeader}>Full Name</Text>
          <TextInput
            style={styles.input}
            textAlign="right"
            maxLength={30}
            value={state.fullname}
            onChangeText={(fullname) => {
              setState({ ...state, fullname });
            }}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>Email</Text>
          <TextInput
            style={styles.input}
            textAlign="right"
            maxLength={30}
            keyboardType='email-address'
            value={state.email}
            onChangeText={(email) => {
              setState({ ...state, email });
            }}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>Phone Number</Text>
          <TextInput
            style={styles.input}
            textAlign="right"
            maxLength={30}
            keyboardType='numeric'
            value={state.phonenumber}
            onChangeText={(phonenumber) => {
              setState({ ...state, phonenumber });
            }}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>Role</Text>
          <TextInput
            style={styles.input}
            textAlign="right"
            maxLength={30}
            value={state.role}
            onChangeText={(role) => {
              setState({ ...state, role });
            }}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>Twitter</Text>
          <TextInput
            style={styles.input}
            textAlign="right"
            maxLength={30}
            value={state.twitter}
            onChangeText={(twitter) => {
              setState({ ...state, twitter });
            }}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>Linkedin</Text>
          <TextInput
            style={styles.input}
            textAlign="right"
            maxLength={30}
            value={state.linkedin}
            onChangeText={(linkedin) => {
              setState({ ...state, linkedin });
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    marginHorizontal: 20,
    marginTop: 20,
  },
  icon: {
    width: 370,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe8e1'
  },
  textHeader: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  inputContainer: {
    marginTop: 10,
  },
  button: {
    width: 320,
    height: 40,
    backgroundColor: "red",
    marginTop: 30,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  lastTextContainer: {
    flexDirection: "row",
    marginTop: 60,
    marginHorizontal: 20,
  },
  reset: {
    marginLeft: 10,
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
  profileText: {
    color: 'red',
    marginTop: 5,
  }
});
