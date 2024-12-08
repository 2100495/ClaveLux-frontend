import { View, Text,StyleSheet, SafeAreaView, FlatList} from "react-native";
import Styles from "../css/notification";

export default function History(){

    const notif = "Your schedule has been"
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          status: 'Approved',
          host:'Hostname',
          purpose:'Purpose'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          status: 'Approved',
           host:'Hostname',
           purpose:'Purpose'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          status: 'Denied',
           host:'Hostname',
           purpose:'Purpose'
        },
      ];


    return(
     
    <View style={Styles.mainContainer}>

        {DATA.map((item,index)=>{
            const status_color = item.status === 'Approved' ? '#008f7a' : '#b31105';
            return(
            <View style={Styles.notif_container}>
                <View style={Styles.notif_data}>
                    <View style={Styles.info1}>
                        <Text style={Styles.host}>{item.host}</Text>
                        <Text style={Styles.purpose}>{item.purpose}</Text>
                    </View>
                    <View style={Styles.info2}>
                        <Text style={[Styles.status,{backgroundColor:status_color} ]}>{item.status}</Text>
                    </View>
                </View>

            </View>
            )
        })}

    </View>
       
    )
}

