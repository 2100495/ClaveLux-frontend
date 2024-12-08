import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Form() {
  return (
    <View style={styles.mainContainer}> 
        <Text> Form </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer:{
      flex:1,
      backgroundColor:"white"
  }
})

