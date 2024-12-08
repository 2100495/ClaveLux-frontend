import { StyleSheet, Image, Platform, View, Text} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Schedule() {
  return (
    <View style={styles.mainContainer}> 
    <Text> Schedule </Text>
</View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
      flex:1,
      backgroundColor:"white"
  }
})