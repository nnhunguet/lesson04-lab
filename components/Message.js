import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Message(){
  return(
    <View style={styles.container}>
      <Image 
        source={{uri: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/66028072_2360942504181428_6238851141774344192_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=PMpMSIgbFxwAX9DSq4a&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=38a1c8cbc25d7e5e3a842d580b382d09&oe=5F3C20A5"}}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <View style={styles.authorAndTime}>  
          <Text>
            Hung
          </Text>
          <Text>
            22h30
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            Expo web is in beta, please report any bugs or missing features on the Expo repo.
            You can follow the V1 release for more info: https://github.com/expo/expo/issues/6782   12314131
            12314132112314133132123333333333333333333
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  image: {
    height: 88,
    width: 88,
    resizeMode: "cover",
    borderRadius: 44,
  }, 
  wrapper: {
  },
  authorAndTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
  }
})