import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function NotificationScreen(){
  return(
    <Text style={{alignItems: "center", justifyContent: "center"}}>Notification</Text>
  )
}

export default function Notification() {
  return (
      <Stack.Navigator>
      </Stack.Navigator>
  );
}

