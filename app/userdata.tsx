import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const get_visitor_id = async () => {
  const visitor_id = await AsyncStorage.getItem("visitor_id");
  return visitor_id != null ? JSON.parse(visitor_id) : null;
};

const get_lname = async () => {
  const lname = await AsyncStorage.getItem("lname");
  return get_lname;
};

const get_fname = async () => {
  const fname = await AsyncStorage.getItem("fname");
  return get_fname;
};

const get_username = async () => {
  const username = await AsyncStorage.getItem("username");
  return username;
};

const get_email = async () => {
  const email = await AsyncStorage.getItem("email");
  return email;
};

export { get_visitor_id, get_fname, get_lname, get_username, get_email };
