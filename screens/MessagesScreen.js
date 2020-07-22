import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuOutlined } from '@ant-design/icons'

import Message from '../components/Message';

const Stack = createStackNavigator(); 
function MessagesScreen(){
  return(
    <View>
      <Message/>
    </View>
  )
}

export default function Messages() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="MessagesScreen" 
          component={MessagesScreen} 
          options={{
            title: 'Messages',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: "center",
            headerLeft: props => <MenuOutlined style={{color: "black", marginLeft: 12,}}/>,
          }}
        />
    </Stack.Navigator>
  );
}