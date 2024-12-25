import { Image, StyleSheet, Platform, Button } from "react-native";
const Styles = StyleSheet.create({
    MainContainer: {
      backgroundColor:'#fffdfa',
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      // justifyContent:"center",
      alignItems: "center",
      // justifyContent:'center',
      gap: 20,
      flex: 1,
   
    },
    toggle:{
   
      width:"80%",
      flexDirection:'row',
      justifyContent:'center',
      gap:10,
      marginTop:50
    },
    toggle1:{
      width:'50%',
      paddingVertical:10,
      borderRadius:5,
      alignItems:'center',
      backgroundColor:'#ffc454'
    },
    toggle2:{
      width:'50%',
      alignItems:'center',
  
      paddingVertical:10,
      borderRadius:5,
    },
    input: {
      width: "80%",
      // height: 50,
      backgroundColor: "#fff",
      // borderRadius: 8,
      // borderWidth: 1,
      // borderColor: "#ddd",
      // paddingHorizontal: 15,
      // fontSize: 12,
      // color: "#333",
      // shadowColor: "#000",
      // shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.1,
      // shadowRadius: 5,
      // elevation: 3, // Adds shadow for Android
    },
    buttonContainer: {
      width: "80%",
      backgroundColor: "#752738",
    },
    inputContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      marginTop: 20,
    },
    footer: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
    text_1: {
      fontSize: 14,
      color: "#545353",
    },
  
    register: {
      fontSize: 14,
      color: "#545353",
    },
  
    logo: {
      width: 200,
      height: 200,
      borderRadius: 500,
      marginTop:150
    //   marginTop: 120,
    },
    login: {
      color: "white",
      width: "80%",
      backgroundColor: "#752738",
      paddingTop: 13,
      paddingBottom: 13,
      textAlign: "center",
      borderRadius: 5,
      alignItems:'center',
      justifyContent:'center',
    
      // marginTop:20
    },
    login_text:{
        color:'white',
        display:'flex',
        textAlign:'center'
    }
  });

  export default Styles;