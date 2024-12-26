import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";

import { useEffect, useState } from "react";
import Styles from "../css/setting";
import { Divider } from "react-native-paper";
import { PaperProvider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import * as Updates from "expo-updates";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Settings() {
  interface Detail {
    option: string;
    icon: string;
  }
  const details: Detail[] = [
    { option: "Personal Details", icon: "person-outline" },
    { option: "Password Security", icon: "build-outline" },
    { option: "Verification", icon: "checkmark-circle-outline" },
    { option: "Language and Region", icon: "globe-outline" },
    { option: "Terms of Service and Privacy Policy", icon: "document-outline" },
    { option: "About", icon: "information-circle-outline" },
  ];

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const getData = async () => {
    const fname: any = await AsyncStorage.getItem("fname");
    const lname: any = await AsyncStorage.getItem("lname");
    const email: any = await AsyncStorage.getItem("email");

    setFname(fname);
    setLname(lname);
    setEmail(email);
  };

  const router = useRouter();
  const log_out = async () => {
    const keys = ["lname", "fname", "email", "position_id"];
    await AsyncStorage.multiRemove(keys);
    router.push("/+not-found");
  };

  useEffect(() => {
    getData();
  });

  return (
    <PaperProvider>
      <View style={Styles.mainContainer}>
        <View style={Styles.userProfile}>
          <Image
            style={Styles.userPhoto}
            source={require("../../assets/images/user.jpg")}
          />

          <View>
            <Text style={Styles.fullname}>
              {fname} {lname}
            </Text>
            <Text style={Styles.email}>{email}</Text>
          </View>
        </View>
        <View style={Styles.divider}></View>

        {/* Other Details */}

        {details.map((items: any, index) => (
          <View key={index} style={Styles.other_details}>
            <Ionicons
              style={Styles.icon}
              name={items.icon}
              size={20}
              color="#752738"
            />
            <Text style={Styles.textOption}>{items.option}</Text>
          </View>
        ))}

        <Pressable style={Styles.other_details} onPress={log_out}>
          <Ionicons
            style={Styles.icon}
            name="log-out-outline"
            size={20}
            color="#752738"
          />
          <Text style={Styles.textOption}>Logout</Text>
        </Pressable>
      </View>
    </PaperProvider>
  );
}
