import { Image, StyleSheet, Platform, View, Text, Alert } from "react-native";

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
export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
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

  // Submit
  function submit() {
    var id = date.toDateString() + time.toDateString();
    if (
      fname.trim() === "" ||
      lname.trim() === "" ||
      email.trim() === "" ||
      hostStatus.trim() === "" ||
      visitPurpose.trim() === ""
    ) {
      showModal();
      createTwoButtonAlert();
    } else {
      router.push("/(tabs)/approval");
      setFname("");
      setLname("");
      setEmail("");
      sethostStatus("");
      setvisitPurpose("");
    }

    setData([
      {
        id: id,
        fname: fname,
        lname: lname,
        email: email,
        hostStatus: hostStatus,
        visitPurpose: visitPurpose,
        date: date,
        time: time,
      },
    ]);

    console.log(data);
  }
  const hasErrors = () => {
    return fname.trim().length === 0;
  };

  function addData() {}
  return (
    <PaperProvider>
      {/* Modal */}

      <View style={Styles.mainContainer}>
        <View style={Styles.formContainer}>
          <Text style={Styles.headers}>Visitor's Info</Text>

          <TextInput
            label="First Name"
            value={fname}
            mode="outlined"
            outlineColor="#d1d1d1"
            onChangeText={(fname) => setFname(fname)}
          />
          <TextInput
            label="Last Name"
            value={lname}
            mode="outlined"
            outlineColor="#d1d1d1"
            onChangeText={(lname) => setLname(lname)}
          />
          <Text style={Styles.headers2}>Host Info</Text>
          {/* Email */}
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            outlineColor="#d1d1d1"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="Host status"
            mode="outlined"
            outlineColor="#d1d1d1"
            value={hostStatus}
            onChangeText={(hostStatus) => sethostStatus(hostStatus)}
          />
          <TextInput
            label="Purpose of Visit"
            mode="outlined"
            outlineColor="#d1d1d1"
            value={visitPurpose}
            onChangeText={(visitPurpose) => setvisitPurpose(visitPurpose)}
          />
          <Text style={Styles.headers2}>Schedule</Text>
          <TextInput
            label="Date"
            onPress={showDatepicker}
            value={date.toLocaleDateString()}
            mode="outlined"
            outlineColor="#d1d1d1"
          />
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date" // Can be 'date', 'time', or 'datetime'
              is24Hour={true} // Use 24-hour format
              display="default" // 'default' | 'spinner' | 'calendar' | 'clock'
              onChange={onChangeDate}
            />
          )}
          {/* Time */}
          <TextInput
            label="Date"
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
          <Button
            style={Styles.submit_button}
            mode="contained"
            onPress={submit}
          >
            Submit
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}
