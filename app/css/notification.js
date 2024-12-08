import { StyleSheet, Image, Platform, View, Text} from 'react-native';

const Styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:"white",
        display:'flex',
        alignItems:'center',
        paddingTop:20,
        flex:1,
        width:"100%",
        gap:10
        // backgroundColor:'#f6f6f6'
        
    },
    notif_container:{
        borderWidth:1,
        width:"93%",
        paddingHorizontal:15,
        paddingVertical:10,
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
        flexDirection:'row'
    },
    info1:{
        // borderWidth:1,
        width:'80%'
    },
    host:{
        color:'#845ec2',
        fontWeight:'bold'
    },
    purpose:{
        color:'#a1a1a1',
    },
    info2:{
        // borderWidth:1,
         width:'20%',
         display:'flex',
         justifyContent:'center',
        alignItems:'center'
    },
    status:{
        textAlign:'center',
        backgroundColor:'#008f7a',
        width:'100%',
        paddingVertical:3,
        color:'white',
        fontWeight:'bold',
        borderRadius:5,
        fontSize:12
        // borderWidth:1
    }


  })
export default Styles;