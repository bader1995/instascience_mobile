import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from "./core/config";
import { doc, setDoc } from "firebase/firestore";
import LogoPicture from "./assets/instagram_logo.png";
import IconFacebook from "./assets/facebook.png";


export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ActiveButton, setActiveButton] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if( email !== "" && password !== "" )
    {
      setActiveButton(true)
    }
    else
    {
      setActiveButton(false)
    }

  }, [email, password])

  return (
    <View style={styles.container}>
      { loading && <ActivityIndicator style={{ marginBottom: 60 }} size={'large'} color="#0095F6" /> }
      <Text>English (United States) ></Text>
      <Image source={LogoPicture} style={{ width: 190, height: 60, marginTop: 50 }} />
      <TextInput onChangeText={(value) => setEmail(value)} style={{ borderRadius: 5, paddingLeft: 10, borderColor: "#DBDBDB", borderWidth: 1, backgroundColor: "#FAFAFA", height: 45, width: "80%", marginTop: 20 }} placeholder="E-mail" />
      <TextInput style={{ borderRadius: 5, paddingLeft: 10, borderColor: "#DBDBDB", borderWidth: 1, backgroundColor: "#FAFAFA", height: 45, width: "80%", marginTop: 10 }} onChangeText={(value) => setPassword(value)} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity onPress={() => ActiveButton && setLoading(!loading)} style={{ ...styles.buttonStyle, backgroundColor: ActiveButton ? "#0095F6" : "#B2DFFC" }}>
        <Text style={{ color: "white" }}>Log in</Text>
      </TouchableOpacity>
      <Text style={{ color: "grey", justifyContent: "center", fontSize: 12, marginTop: 15 }}>Forgot your login details? <Text style={{ color: "#00376B", fontWeight: "bold" }}>Get help logging in.</Text></Text>
      <View style={{ backgroundColor: "#E0E0E0", width: "80%", height: 1.5, marginTop: 20 }}></View>
      <TouchableOpacity onPress={() => alert("Loggin in with facebook ...")}>
        <Text style={{ justifyContent: "center", color: "#1EA1F7", fontWeight: "bold", marginTop: 30 }}><Image source={IconFacebook} style={{ height: 20, width: 20 }} />  Log in with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    borderRadius: 5 
  }
});
