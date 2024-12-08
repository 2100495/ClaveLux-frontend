import { StyleSheet, Image, Platform, View, Text} from 'react-native';

const Styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white",
        display:'flex',
        alignItems:'center',
        // backgroundColor:'#f6f6f6'
    },
  
    scheduleCard:{
        display:'flex',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#ebebeb',
        flexDirection:'row',
        width:'90%',
        marginTop:10,
        paddingHorizontal:15,
        paddingVertical:12,
        borderRadius:5,
        shadowColor: 'rgba(99, 99, 99, 0.2)', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Offset (0px 2px)
        shadowOpacity: 0.2, // Opacity (0.2)
        shadowRadius: 8, // Blur radius (8px)
        
        // Android shadow
        elevation: 5, // Elevation for Android (more prominent shadow)
        
        // Android shadow
    },
    info1:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
      
        width:'50%',
    },


    info2:{
        display:'flex',
        // flexDirection:'co',
        // width:'100%'
        width:'60%',
      
    },
    date_time:{
        color:'#a1a1a1',
        // width:'30%',
        fontSize:12
        // width:'40%'
    },
    hostname:{
        fontWeight:'bold',
        backgroundColor:'#845ec2',
        color:'white',
        paddingVertical:3,
        textAlign:'center',
        borderRadius:4,
        display:'flex',
        fontSize:12,
        width:'50%'
    },
    purpose:{
        color:'#d65db1',
        width:'60%'
    }
  })
export default Styles;