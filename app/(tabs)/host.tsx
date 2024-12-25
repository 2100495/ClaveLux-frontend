import {
  Image,
  Pressable,
  StyleSheet,
  Platform,
  View,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import Styles from "../css/host";
import AxiosInstance from "../AxiosInstance";
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Form() {
  const [data, setData] = useState([]);

  const [contactID, setcontactID] = useState();

  const getFname = async () => {
    const contactID: any = await AsyncStorage.getItem("contact_id");
    setcontactID(contactID);
  };

  // Fetch Schedule
  const fetchData = async () => {
    AxiosInstance();
    const response = await axios.get("/api/get_schedule_contact/" + contactID);
    console.log("d", contactID);
    setData(response.data);
  };

  // Fetch Accepted Schedule
  const [acccepted, setAccepted] = useState([]);
  const fetch_accepted = async () => {
    AxiosInstance();
    const response = await axios.get("/api/schedule_accepted/" + contactID);
    console.log("d", contactID);
    setAccepted(response.data);
  };

  // Fetch Rejected Schedule
  const [rejected, setRejected] = useState([]);
  const fetch_rejected = async () => {
    AxiosInstance();
    const response = await axios.get("/api/schedule_denied/" + contactID);
    console.log("d", contactID);
    setRejected(response.data);
    console.log("d", rejected);
  };

  // Accept Schedule
  const accept = async (id: any) => {
    console.log(id);
    console.log("Accept");
    const data: any = {
      schedule_id: id,
    };
    fetchData();
    try {
      AxiosInstance();
      const response = await axios.post("/api/accept_schedule", data);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  // Deny Schedule
  const deny = async (id: any) => {
    console.log(id);
    console.log("Deny");
    const data: any = {
      schedule_id: id,
    };
    fetchData();
    try {
      AxiosInstance();
      const response = await axios.post("/api/deny_schedule/", data);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  let [backgroundColor1, setbackgroundColor1] = useState("#ffc454");
  let [backgroundColor2, setbackgroundColor2] = useState("white");
  let [backgroundColor3, setbackgroundColor3] = useState("#white");
  let [value, setValue] = useState(1);

  function changeButton(id: any) {
    console.log(id);
    if (id == 1) {
      setbackgroundColor1("#ffc454");
      setbackgroundColor2("white");
      setbackgroundColor3("white");
      setValue(id);
      fetchData();
    } else if (id == 2) {
      setbackgroundColor1("white");
      setbackgroundColor2("#ffc454");
      setbackgroundColor3("white");
      setValue(id);
      fetch_accepted();
    } else if (id == 3) {
      setbackgroundColor1("white");
      setbackgroundColor2("white");
      setbackgroundColor3("#ffc454");
      setValue(id);
      fetch_rejected();
    }
  }

  useEffect(() => {
    AxiosInstance();
    getFname();
    fetchData();
    // fetch_accepted();
    // fetch_rejected();
  }, [data]);

  return (
    <ScrollView>
      <View style={Styles.MainContainer}>
        <View style={Styles.buttonContainer}>
          <Pressable
            style={[Styles.buttons, { backgroundColor: backgroundColor1 }]}
            onPress={() => changeButton(1)}
          >
            <Text style={Styles.text}>Queue</Text>
          </Pressable>
          <Pressable
            style={[Styles.buttons, { backgroundColor: backgroundColor2 }]}
            onPress={() => changeButton(2)}
          >
            <Text style={Styles.text}>Accepted</Text>
          </Pressable>
          <Pressable
            style={[Styles.buttons, { backgroundColor: backgroundColor3 }]}
            onPress={() => changeButton(3)}
          >
            <Text style={Styles.text}>Denied</Text>
          </Pressable>
        </View>

        {/* Pendings */}
        {value === 1 &&
          data.map((item: any, index: any) => (
            <View
              style={Styles.notif_container}
              key={item.schedule_id || index}
            >
              <View style={Styles.notif_data}>
                <Text style={Styles.host}>
                  {item.fname} {item.lname}
                </Text>
                <Text style={Styles.purpose}>{item.visitor_purpose}</Text>
                <Text style={Styles.purpose}>
                  {item.visit_date} // {item.visit_time}
                </Text>

                <View style={Styles.info2}>
                  <Pressable
                    style={Styles.status_color1}
                    onPress={() => accept(item.schedule_id)}
                  >
                    <Text style={Styles.text_color}>Accept</Text>
                  </Pressable>
                  <Pressable
                    style={Styles.status_color2}
                    onPress={() => deny(item.schedule_id)}
                  >
                    <Text style={Styles.text_color}>Deny</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}

        {/* Accepted */}
        {value === 2 &&
          acccepted.map((item: any, index: any) => (
            <View
              style={Styles.notif_container}
              key={item.schedule_id || index}
            >
              <View style={Styles.notif_data}>
                <Text style={Styles.host}>
                  {item.fname} {item.lname}
                </Text>
                <Text style={Styles.purpose}>{item.visitor_purpose}</Text>
                <Text style={Styles.purpose}>
                  {item.visit_date} // {item.visit_time}
                </Text>

                <View style={Styles.info2}>
                  <Pressable
                    style={[
                      Styles.status_color1,
                      { backgroundColor: "#008f7a" },
                    ]}
                    onPress={() => accept(item.schedule_id)}
                  >
                    <Text style={Styles.text_color}>Accepted</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}

        {/* Denied */}
        {value === 3 &&
          rejected.map((item: any, index: any) => (
            <View
              style={Styles.notif_container}
              key={item.schedule_id || index}
            >
              <View style={Styles.notif_data}>
                <Text style={Styles.host}>
                  {item.fname} {item.lname}
                </Text>
                <Text style={Styles.purpose}>{item.visitor_purpose}</Text>
                <Text style={Styles.purpose}>
                  {item.visit_date} // {item.visit_time}
                </Text>

                <View style={Styles.info2}>
                  <Pressable
                    style={[
                      Styles.status_color2,
                      { backgroundColor: "#b31105" },
                    ]}
                    onPress={() => deny(item.schedule_id)}
                  >
                    <Text style={Styles.text_color}>Denied</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}
