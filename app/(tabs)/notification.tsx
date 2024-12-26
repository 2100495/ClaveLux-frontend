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
import AxiosInstance from "../AxiosInstance";
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function History() {
  const notif = "Your schedule has been";

  const info = require("../json/notification.json");
  const [data, setData] = useState([]);

  const [visitorID, setvisitorID] = useState();
  const getFname = async () => {
    const visitor: any = await AsyncStorage.getItem("visitor_id");
    setvisitorID(visitor);
  };

  const fetchData = async () => {
    AxiosInstance();
    const response = await axios.get("/api/get_schedule/" + visitorID);
    setData(response.data);
  };

  useEffect(() => {
    AxiosInstance();
    getFname();
    fetchData();
  }, [visitorID]);
  return (
    <ScrollView style={Styles.scrollview}>
      <View style={Styles.mainContainer}>
        {data.map((item: any, index: any) => {
          // Set the background color based on status
          let statusColor: string;

          if (item.schedule_status === "Approved") {
            statusColor = "#008f7a"; // Green for approved
          } else if (item.schedule_status === "Denied") {
            statusColor = "#b31105"; // Red for denied
          } else if (item.schedule_status === "Pending") {
            statusColor = "#005aad"; // Blue for pending
          } else {
            statusColor = "green"; // Default color for unknown statuses
          }

          return (
            <View key={index} style={Styles.notif_container}>
              <View style={Styles.notif_data}>
                <View style={Styles.info1}>
                  <Text style={Styles.host}>{item.email}</Text>
                  <Text style={Styles.purpose}>
                    {item.fname} {item.lname}
                  </Text>
                  <Text style={Styles.purpose}>{item.visitor_purpose}</Text>
                  <Text style={Styles.purpose}>
                    {item.visit_date} // {item.visit_time}
                  </Text>
                </View>
                <View style={Styles.info2}>
                  <Pressable
                    style={[Styles.status, { backgroundColor: statusColor }]}
                  >
                    <Text style={Styles.denied}>{item.schedule_status}</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
