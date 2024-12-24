import { registerRootComponent } from "expo";
import { Link, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Image, StyleSheet, Platform, Button } from "react-native";

import { TextInput } from "react-native-paper";

import Styles from "./css/login";
import AxiosInstance from "./AxiosInstance";
import axios from "axios";

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
  });

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

  async function login_for_visitor() {
    AxiosInstance();
    const data = {
      email: email,
      password: password,
    };

    try {
      AxiosInstance();
      const response = await axios.post("/api/login", data);
      console.log(response.status);
      if (response.status == 200) {
        router.push("/(tabs)");
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function login_for_contact() {
    AxiosInstance();
    const data = {
      email: email,
      password: password,
    };

    try {
      AxiosInstance();
      const response = await axios.post("/api/contact_login", data);
      console.log(response.status);
      if (response.status == 200) {
        router.push("/(tabs)");
      }
    } catch (e) {
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
