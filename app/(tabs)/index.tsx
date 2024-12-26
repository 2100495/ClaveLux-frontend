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

import { useEffect } from "react";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PaperProvider } from "react-native-paper";
import {
  TextInput,
  Button,
  HelperText,
  Modal,
  Portal,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Approval from "./approval";
import schedule from "../json/schedule.json";

import Styles from "../css/form";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get_visitor_id } from "../userdata";
import AxiosInstance from "../AxiosInstance";
import axios from "axios";

export default function Form() {
  // Get user Data
  const [visitor_id, setvisitor_id] = useState<number | null>(null);

  const get_visitor_id = async () => {
    const visitor_id: any = await AsyncStorage.getItem("visitor_id");
    setvisitor_id(visitor_id);
  };

  const [fname, setFname] = useState<string>("");
  const getFname = async () => {
    const fname: any = await AsyncStorage.getItem("fname");
    setFname(fname);
  };

  const [lname, setLname] = useState<string>("");
  const getLname = async () => {
    const lname: any = await AsyncStorage.getItem("lname");
    setLname(lname);
  };

  const [email, setEmail] = useState<string>("");
  // const getEmail = async () => {
  //   const email: any = await AsyncStorage.getItem("email");
  //   setEmail(email);
  // };
  const [position_id, setposition_id] = useState(2);
  const [hostStatus, sethostStatus] = useState("");
  const [visitPurpose, setvisitPurpose] = useState("");
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [visible, setVisible] = useState(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const router = useRouter();

  // Function to handle the date change
  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === "ios"); // Hide the picker after selecting on iOS
    setDate(currentDate); // Update the date state
  };

  // Function to show the date picker
  const showDatepicker = () => {
    setShowDate(true);
  };

  // TIme

  // const [show, setShow] = useState(false);
  const onChange = (event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || time;
    setShowTime(Platform.OS === "ios"); // Hide the picker after selection on iOS
    setTime(currentTime); // Update the time state
  };

  // Show the time picker
  const showTimepicker = () => {
    setShowTime(true);
  };
  interface Data {
    id: string;
    fname: string;
    lname: string;
    email: string;
    hostStatus: string;
    visitPurpose: string;
    date: Date;
    time: Date;
  }
  const [data, setData] = useState<Data[]>([]);

  // Alert
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Failed to Submit",
      "Please fill in the necessary fields before submitting.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

  const fail_email = () =>
    Alert.alert(
      "Failed to Submit",
      "Contact does not exist. Please check if contact email is correct",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

  // Submit
  async function submit() {
    var id = date.toDateString() + time.toDateString();

    if (email.trim() === "" || visitPurpose.trim() === "") {
      showModal();
      createTwoButtonAlert();
    } else {
      try {
        console.log(email);
        AxiosInstance();

        const response = await axios.post("/api/schedule", {
          visitor_id: visitor_id,
          position_id: position_id,
          schedule_status_id: 1,
          email: email,
          visitor_purpose: visitPurpose,

          visit_date: date,
          visit_time: time,
        });
        if (response.status == 401) {
          fail_email();
        }
        router.push("/(tabs)/approval");
        // setFname("");
        // setLname("");
        setEmail("");
        setvisitPurpose("");
      } catch (e) {
        fail_email();
      }
    }

    console.log(data);
  }
  const hasErrors = () => {
    return !email.includes("@");
  };

  useEffect(() => {
    get_visitor_id();
    // getEmail();
    getFname();
    getLname();
  });
  return (
    <PaperProvider>
      {/* Modal */}

      <View style={Styles.mainContainer}>
        <ScrollView style={Styles.scroll_view}>
          <View style={Styles.formContainer}>
            <Text style={Styles.headers}>Visitor's Info</Text>

            <TextInput
              label="First Name"
              value={fname}
              mode="outlined"
              outlineColor="#d1d1d1"
              onChangeText={setFname}
              disabled
            />
            <TextInput
              label="Last Name"
              value={lname}
              mode="outlined"
              outlineColor="#d1d1d1"
              onChangeText={setLname}
              disabled
            />
            <Text style={Styles.headers2}>Host Info</Text>
            {/* Email */}
            <TextInput
              label="Email"
              value={email}
              mode="outlined"
              outlineColor="#d1d1d1"
              onChangeText={setEmail}
              style={Styles.inputText}
            />
            <HelperText type="error" visible={hasErrors()}>
              Email address is invalid!
            </HelperText>

            {/* <TextInput
                label="Point of Contact Status"
                mode="outlined"
                outlineColor="#d1d1d1"
                value={hostStatus}
                onChangeText={(hostStatus) => sethostStatus(hostStatus)}
                style={Styles.inputText}
              /> */}
            <Text style={Styles.headers}>Point of Contact Status</Text>
            <Picker
              selectedValue={position_id}
              onValueChange={(itemValue, itemIndex) =>
                setposition_id(itemValue)
              }
              style={Styles.myPicker}
            >
              <Picker.Item label="Student" value="2" />
              <Picker.Item label="Faculty/Admin" value="3" />
              <Picker.Item label="Office" value="4" />
            </Picker>
            <TextInput
              label="Purpose of Visit"
              mode="outlined"
              outlineColor="#d1d1d1"
              value={visitPurpose}
              onChangeText={setvisitPurpose}
              style={Styles.inputText}
            />
            <Text style={Styles.headers2}>Schedule</Text>
            <TextInput
              label="Date"
              onPress={showDatepicker}
              value={date.toLocaleDateString()}
              mode="outlined"
              outlineColor="#d1d1d1"
              style={Styles.inputText}
            />
            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date" // Can be 'date', 'time', or 'datetime'
                is24Hour={true} // Use 24-hour format
                display="default" // 'default' | 'spinner' | 'calendar' | 'clock'
                onChange={onChangeDate}
                style={Styles.inputText}
              />
            )}
            {/* Time */}
            <TextInput
              label="Time"
              onPress={showTimepicker}
              value={time.toLocaleTimeString()}
              mode="outlined"
              outlineColor="#d1d1d1"
            />
            {/* Conditionally render the DateTimePicker */}
            {showTime && (
              <DateTimePicker
                testID="timePicker"
                value={time}
                mode="time" // Set mode to 'time' for time picker
                is24Hour={false} // Use 24-hour format (true for 24-hour, false for 12-hour)
                display="default" // Can be 'default', 'spinner', 'clock'
                onChange={onChange}
              />
            )}
            <Pressable style={Styles.submit_button} onPress={submit}>
              <Text style={Styles.submit}>Submit</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
