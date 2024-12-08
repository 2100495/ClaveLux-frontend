import { Image, StyleSheet, Platform, View, Text } from 'react-native';

const Styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        display:'flex',
        flex:1,
        alignItems:'center',
        backgroundColor:"white"
    },
    formContainer:{
      width:'90%',
      marginTop:20,
      gap:10,
    },
    headers:{
        fontSize:18,
        fontWeight:'bold',
        color:'#845ec2'
    },
    headers2:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
         color:'#845ec2'
    },
    submit_button:{
        marginTop:10
    },
    picker:{
        // borderWidth:1,
        borderColor:'red',
        borderWidth:2,
        borderTopColor:'red'
  
    },
    portal:{

    },
    modal:{
        display:'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
        
      
    },
    logo:{
        width:150,
        height:150,
        borderRadius:500,
        marginTop:120
      },
  })

  export default Styles;