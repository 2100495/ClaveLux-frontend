import { View, Text, StyleSheet, Image } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";
export default function Approval() {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.logo}
      ></Image>

      <Text style={styles.text1}>Your visitor pass has been approved</Text>
      <View style={styles.qr}>
        <QRCode value="http://awesome.link.qr" logoSize={30} />
        <Text style={styles.text2}>Use the QR code for your entry</Text>
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
    textAlign: "center",
  },

  text2: {
    fontSize: 14,
    marginTop: 10,
  },
  qr: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
