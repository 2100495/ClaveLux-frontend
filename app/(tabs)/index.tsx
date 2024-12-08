import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PaperProvider } from 'react-native-paper';
import { TextInput,Button } from 'react-native-paper';
import {useState} from 'react'

export default function Form() {

  const [text, setText] = useState("");
  return (
    <PaperProvider>
      <View style={styles.mainContainer}> 

        <View style={styles.formContainer}>
          <TextInput
            label="Firs Name"
            value={text}
              mode='outlined'
            onChangeText={text => setText(text)}
          />
          <TextInput
                    label="Last Name"
                    value={text}
                    mode='outlined'
                    onChangeText={text => setText(text)}
                  />


          <TextInput
                    label="Date"
                    value={text}
                      mode='outlined'
                    onChangeText={text => setText(text)}
                  />

          <TextInput
                    label="Email"
                      mode='outlined'
                    value={text}
                    onChangeText={text => setText(text)}
                  />  

          <TextInput
            label="Purpose of Visit"
              mode='outlined'
            value={text}
            onChangeText={text => setText(text)}
            />

          <Button  mode="contained" onPress={() => console.log('Pressed')}>
              Submit
            </Button>

      </View>

      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  mainContainer:{
      width:'100%',
      display:'flex',
      flex:1,
      alignItems:'center',
      backgroundColor:"white"
  },
  formContainer:{
    width:'80%',
    marginTop:20,
    gap:10,
  }
})

