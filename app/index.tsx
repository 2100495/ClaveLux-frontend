import { registerRootComponent } from 'expo';
import { Link } from 'expo-router';
import { View,Text,TextInput } from 'react-native';
import { useState } from 'react';
import { Image, StyleSheet, Platform,Button } from 'react-native';

 export default function Login(){
    const [username, password] = useState();


    return (

        <View style={styles.MainContainer}>
    
        
        
              <Image 
                source={require('./../assets/images/logo.jpeg')}
                style={styles.logo}
              ></Image>
         
    
        <View style={styles.inputContainer}>
        <TextInput
              // // style={styles.input}
              // onChangeText={onChangeText}
              value={username}
              style={styles.input}
              placeholder='Username'
            />
    
          <TextInput
              // // style={styles.input}
              // onChangeText={onChangeText}
              value={username}
              style={styles.input}
              placeholder='Password'
            />
    
        </View>
       
          <View style={styles.buttonContainer}>
            <Link href={"/(tabs)"} style={styles.login}>  Login </Link>
           
            {/* <Button
                title="Login"
                color="#007BFF" // Custom button color
    
                // onPress={() => Alert.alert('Button pressed')}
              /> */}
        
          
          </View>
          <View style={styles.footer}>
            <Text style={styles.text_1}>Doesn't have an account</Text>
            <Text style={styles.register}>Register</Text>
          </View>
    
    
        </View>
    
      );
    }
    
    const styles = StyleSheet.create({
    
      MainContainer:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"white",
        // justifyContent:"center",
        alignItems:'center',
        gap: 20,
        flex:1,
     
      },
      input: {
      
        width: "80%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 15,
        fontSize: 12,
        color: "#333",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // Adds shadow for Android
    
      },
      buttonContainer:{
        width:'80%',
    
      },
      inputContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        marginTop:20
      },
      footer:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
      },
      text_1:{
        fontSize:14,
        color:'#545353'
      },
    
      register:{
        fontSize:14,
        color:'#545353'
      },
    
      logo:{
        width:200,
        height:200,
        borderRadius:500,
        marginTop:120
      },
      login:{
         color:"white",
         backgroundColor:'#026ca6',
         paddingTop:10,
         paddingBottom:10,
         textAlign:'center',
         borderRadius:5
         
      }
    
    });