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
    userProfile:{
        // borderWidth:1,
        width:'90%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        marginTop:40
    },
    userPhoto:{
        width:70,
        height:70,
        borderRadius: 50,
    },
    fullname:{
        fontSize:16,
        fontWeight:'bold'
    },
    email:{

    },
    divider:{
        borderWidth:.5,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
        width:'93%'
    },
    other_details:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginTop:20

    },
    textOption:{
        fontSize:18,
        color:'#807e7e'
    },
    icon:{
        width:'10%'
    }


  })
export default Styles;