import { View, Text,StyleSheet } from "react-native";

export default function Settings(){
    return(
        <View style={styles.mainContainer}> 
            <Text> Setting </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white"
    }
})