import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DetailScreen({route}){
  return(
    <View style={styles.container}> 
      <Text>Detail</Text>
      <Text>{route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})