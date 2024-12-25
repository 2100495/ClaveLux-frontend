import { Image, StyleSheet, Platform, View, Text } from 'react-native';

const Styles = StyleSheet.create({
    MainContainer:{
        width:'100%',
        display:'flex',
        flex:1,
        alignItems:'center',
        backgroundColor:'#fffdfa',
    },
    notif_container:{
        marginTop:20,
        borderWidth:1,
        width:"93%",
        paddingHorizontal:15,
        paddingVertical:20,
        borderColor:'#ebebeb',
        borderRadius:5,
        shadowColor: 'rgba(99, 99, 99, 0.2)', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Offset (0px 2px)
        shadowOpacity: 0.2, // Opacity (0.2)
        shadowRadius: 8, // Blur radius (8px)
        
        // Android shadow
        elevation: 5, // Elevation for Android (more prominent shadow)
        
    },
    notif_data:{
        display:'flex',
        
        // flexDirection:'row'
    },
    info1:{
        // borderWidth:1,
        width:'80%'
    },
    host:{
        textAlign:'center',
        color:'#752738',
        fontWeight:'bold',
        fontSize:16
    },
    purpose:{
        textAlign:'center',
        color:'#a1a1a1',
    },
    info2:{
        // borderWidth:1,
         width:'100%',
         display:'flex',
         flexDirection:'row',
         justifyContent:'center',
        alignItems:'center',
        gap:20,
        marginTop:20,
    },
    status_color1:{
        backgroundColor:'#005aad',
        width:'40%',
      
        alignItems:'center',
        paddingVertical:3,
        color:'white',
        fontWeight:'bold',
        borderRadius:2,
        fontSize:11,
    },
    text_color:{
        color:'white',
        fontWeight:'600'
    },
    status_color2:{
        backgroundColor:'#b31105',
        width:'40%',
      
        alignItems:'center',
        paddingVertical:3,
        color:'white',
        fontWeight:'bold',
        borderRadius:2,
        fontSize:11,
    },
    buttonContainer:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'center',
        gap:20,
        paddingVertical:20
        
    },
    buttons:{
        flex:1,
        alignItems:'center',
        // backgroundColor:'#ffc454',
        paddingVertical:6,
        borderRadius:5
        
    },
    text:{
        fontWeight:'600'
    }
})

export default Styles;