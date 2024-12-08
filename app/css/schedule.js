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
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#ebebeb',
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

    },
    hostname:{
        fontWeight:'bold',
        backgroundColor:'#845ec2',
        color:'white',
        paddingVertical:3,
        paddingHorizontal:10,
        borderRadius:4
    },

    info2:{
        display:'flex',
        flexDirection:'row',
        // width:'100%',
        justifyContent:'space-between',
        marginTop:10
       
    },
    date_time:{
        color:'#a1a1a1',
        width:'20%'
    },
    purpose:{
        color:'#d65db1',
        width:'80%'
    }
  })
export default Styles;