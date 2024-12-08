import { registerRootComponent } from "expo";
import { Link, useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Image, StyleSheet, Platform, Button } from "react-native";
import Styles from "./css/login";
export default function Login() {
  const [username, password] = useState();

  const router = useRouter();

  function login() {
    router.push("/(tabs)");
  }
  return (
    // This is Login Page

    <View style={Styles.MainContainer}>
      <Image
        source={require("./../assets/images/logo.jpeg")}
        style={Styles.logo}
      ></Image>

      <Pressable style={Styles.login} onPress={login}>
        <Text style={Styles.login_text}>Continue with Google</Text>
      </Pressable>
    </View>
  );
}
