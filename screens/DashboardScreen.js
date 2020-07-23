import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import DashboardScreen from '../components/Dashboard';
const Stack = createStackNavigator();

function NotificationScreen(){
  return(
    <Text style={{alignItems: "center", justifyContent: "center"}}>Notification</Text>
  )
}

export default function Dashboard({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="DashboardScreen" 
          component={DashboardScreen} 
          options={{
            headerTitle: "Dashboard",
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity>
                <Image source={require('../assets/menu.png')} style={{width: 28, height: 28, resizeMode: "center", marginLeft: 6}}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => 
                  navigation.navigate("NotificationScreen")
                }
              > 
                <Image source={require('../assets/bell.png')} style={{width: 28, height: 28, resizeMode: "center", marginRight: 6}}/>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      </Stack.Navigator>
  );
}