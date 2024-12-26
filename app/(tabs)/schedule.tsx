import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { DataTable, Card, Button, Avatar } from "react-native-paper";

import { useState, useEffect } from "react";
import { PaperProvider } from "react-native-paper";

import AxiosInstance from "../AxiosInstance";
import axios from "axios";
//css
import Styles from "../css/schedule";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Schedule() {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([8, 16, 24]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
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
    console.log("id", visitorID);
    console.log("data", response.data);
    setData(response.data);
  };

  useEffect(() => {
    AxiosInstance();
    getFname();
    fetchData();
  }, [visitorID]);
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={Styles.mainContainer}>
        {data.map((item: any, index: any) => (
          <View key={index} style={Styles.scheduleCard}>
            <View style={Styles.info2}>
              <Text style={Styles.purpose}>{item.visitor_purpose}</Text>
              <Text style={Styles.email}>{item.email}</Text>
              <Text style={Styles.email}>
                {item.fname} {item.lname}
              </Text>
            </View>
            <View style={Styles.info1}>
              <Text style={Styles.hostname}>{item.visit_date}</Text>
              <Text style={Styles.date_time}>{item.visit_time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
