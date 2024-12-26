import { registerRootComponent } from "expo";
import { Link, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Image, StyleSheet, Platform, Button, Alert } from "react-native";

import { TextInput } from "react-native-paper";

import Styles from "./css/login";
import AxiosInstance from "./AxiosInstance";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isClicked1, setisClicked1] = useState(true);
  const [isClicked2, setisClicked2] = useState(false);
  const handlePressed1 = () => {
    setisClicked1(true);
    setisClicked2(false);
  };
  const handlePressed2 = () => {
    setisClicked2(true);
    setisClicked1(false);
  };
  const router = useRouter();

  // function login() {
  //   router.push("/(tabs)");
  // }
  useEffect(() => {
    AxiosInstance();
    getToken();
  }, []);

  const getToken = async () => {
    try {
      AxiosInstance();
      const response = await axios.get("/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      console.log(response);
      console.log(response.data); // or handle the response data
    } catch (error) {
      console.error("Error fetching CSRF cookie:", error);
    }
  };

  // function ifEmpty() {

  // }
  const failed_to_login = () =>
    Alert.alert("Failed to Authenticate", "Invalid emal or password.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  async function login_for_visitor() {
    if (password.trim() == "" || password.trim() == "") {
      failed_to_login();
    }
    AxiosInstance();
    const data = {
      email: email,
      password: password,
    };

    try {
      AxiosInstance();
      const response = await axios.post("/api/login", data);

      if (response.status == 200) {
        router.push("/(tabs)");
        const data = response.data;
        const keys = [
          "contact_id",
          "visitor_id",
          "lname",
          "fname",
          "username",
          "email",
          "position_id",
        ];
        await AsyncStorage.multiRemove(keys);
        console.log(data);
        await AsyncStorage.setItem("visitor_id", String(data.data.visitor_id));
        await AsyncStorage.setItem("lname", data.data.lname);
        await AsyncStorage.setItem("fname", data.data.fname);
        await AsyncStorage.setItem("username", data.data.username);
        await AsyncStorage.setItem("email", data.data.email);
        await AsyncStorage.setItem(
          "position_id",
          String(data.data.position_id)
        );
      }
    } catch (e) {
      failed_to_login();
    }
  }

  async function login_for_contact() {
    if (password.trim() == "" || password.trim() == "") {
      failed_to_login();
    }
    AxiosInstance();
    const data = {
      email: email,
      password: password,
    };

    try {
      AxiosInstance();
      const response = await axios.post("/api/contact_login", data);
      console.log(response.data);
      if (response.status == 200) {
        router.push("/(tabs)");
        const data = response.data;
        const keys = ["visitor_id", "lname", "fname", "email", "position_id"];
        console.log(data.data.visitor);
        await AsyncStorage.multiRemove(keys);
        await AsyncStorage.setItem("contact_id", String(data.data.contact_id));
        await AsyncStorage.setItem("lname", data.data.lname);
        await AsyncStorage.setItem("fname", data.data.fname);
        await AsyncStorage.setItem("email", data.data.email);
        await AsyncStorage.setItem(
          "position_id",
          String(data.data.position_id)
        );
      }
    } catch (e) {
      failed_to_login();
      console.error(e);
    }
  }
  return (
    // This is Login Page

    <View style={Styles.MainContainer}>
      <View style={Styles.toggle}>
        <Pressable
          onPress={handlePressed1}
          style={isClicked1 ? Styles.toggle1 : Styles.toggle2}
        >
          <Text>Visitor</Text>
        </Pressable>

        <Pressable
          onPress={handlePressed2}
          style={isClicked2 ? Styles.toggle1 : Styles.toggle2}
        >
          <Text>University</Text>
        </Pressable>
      </View>
      <Image
        source={require("./../assets/images/logo.jpeg")}
        style={Styles.logo}
      ></Image>

      <TextInput
        label="Email"
        value={email}
        style={Styles.input}
        onChangeText={setEmail}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        style={Styles.input}
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
        mode="outlined"
      />

      {isClicked1 && (
        <Pressable style={Styles.login} onPress={login_for_visitor}>
          <Text style={Styles.login_text}>Login</Text>
        </Pressable>
      )}
      {isClicked2 && (
        <Pressable style={Styles.login} onPress={login_for_contact}>
          <Text style={Styles.login_text}>Login</Text>
        </Pressable>
      )}
    </View>
  );
}
