import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import Styles from "../css/notification";
export default function History() {
  const notif = "Your schedule has been";

  const info = require("../json/notification.json");

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      status: "Approved",
      host: "Hostname",
      purpose: "Purpose",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      status: "Approved",
      host: "Hostname",
      purpose: "Purpose",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      status: "Denied",
      host: "Hostname",
      purpose: "Purpose",
    },
  ];

  return (
    <ScrollView style={Styles.scrollview}>
      <View style={Styles.mainContainer}>
        {info.map((item: any, index: any) => {
          const status_color =
            item.status === "Approved" ? "#008f7a" : "#b31105";
          if (item.status === "Pending") {
            return null;
          }
          if (item.status === "Denied") {
            return (
              <View key={index} style={Styles.notif_container}>
                <View style={Styles.notif_data}>
                  <View style={Styles.info1}>
                    <Text style={Styles.host}>{item.email}</Text>
                    <Text style={Styles.purpose}>{item.visitPurpose}</Text>
                    <Text style={Styles.purpose}>
                      {item.date} // {item.time}
                    </Text>
                  </View>
                  <View style={Styles.info2}>
                    <Pressable
                      style={[Styles.status, { backgroundColor: status_color }]}
                    >
                      <Text style={Styles.denied}>{item.status}</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          }

          return (
            <View key={index} style={Styles.notif_container}>
              <View style={Styles.notif_data}>
                <View style={Styles.info1}>
                  <Text style={Styles.host}>{item.email}</Text>
                  <Text style={Styles.purpose}>{item.visitPurpose}</Text>
                  <Text style={Styles.purpose}>
                    {item.date} // {item.time}
                  </Text>
                </View>
                <View style={Styles.info2}>
                  <Link
                    href={"/(tabs)/approved"}
                    style={[Styles.status, { backgroundColor: status_color }]}
                  >
                    {item.status}
                  </Link>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
