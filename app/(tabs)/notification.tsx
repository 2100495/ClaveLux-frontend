import { View, Text,StyleSheet} from "react-native";

export default function History(){
    return(
        <View style={styles.mainContainer}> 
            <Text> History </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white"
    }
})