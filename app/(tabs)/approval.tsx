import { View, Text, StyleSheet, Image } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
export default function Approval() {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.logo}
      ></Image>

      <Text style={styles.text1}>Waiting for Approval</Text>

      <View style={styles.indicator}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
        <Text style={styles.text2}>Please Wait.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 500,
    marginTop: 120,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 30,
    color: "#008e9b",
  },

  text2: {
    fontSize: 14,
    marginTop: 10,
  },
  indicator: {
    marginTop: 30,
  },
});
