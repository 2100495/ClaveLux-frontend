import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Styles from "../css/setting";
import { Divider } from "react-native-paper";
import { PaperProvider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import * as Updates from "expo-updates";

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

  const router = useRouter();
  function logout() {
    console.warn("ds");
    router.push("/logout");
    // Updates.reloadAsync();
  }

  return (
    <PaperProvider>
      <View style={Styles.mainContainer}>
        <View style={Styles.userProfile}>
          <Image
            style={Styles.userPhoto}
            source={require("../../assets/images/user.jpg")}
          />

          <View>
            <Text style={Styles.fullname}>First Name Last Name</Text>
            <Text style={Styles.email}>username@gmail.com</Text>
          </View>
        </View>
        <View style={Styles.divider}></View>

        {/* Other Details */}

        {details.map((items, index) => (
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

        <View style={Styles.other_details}>
          <Ionicons
            style={Styles.icon}
            name="log-out-outline"
            size={20}
            color="#752738"
          />
          <Text style={Styles.textOption} onPress={logout}>
            Logout
          </Text>
        </View>
      </View>
    </PaperProvider>
  );
}
