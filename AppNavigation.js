import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommentOutlined, UserOutlined, UsergroupAddOutlined, PullRequestOutlined, LayoutOutlined  } from '@ant-design/icons';

import Contacts from './screens/ContactsScreen'
import Groups from './screens/GroupsScreen';
import Messages from './screens/MessagesScreen';
import More from './screens/MoreScreen';
import Timeline from './screens/TimelineScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let colorIcon;
            switch(route.name) {
              case 'Messages': 
                colorIcon = focused ? 'tomato' : 'gray'
                return <CommentOutlined style={{color: colorIcon}}/>
                break;
              case 'Contacts': 
                colorIcon = focused ? 'tomato' : 'gray'
                return <UserOutlined style={{color: colorIcon}}/>
                break;
              case 'Groups':
                colorIcon = focused ? 'tomato' : 'gray'
                return <UsergroupAddOutlined style={{color: colorIcon}}/>
                break;
              case 'Timeline': 
                colorIcon = focused ? 'tomato' : 'gray'
                return <LayoutOutlined style={{color: colorIcon}}/>
                break;
              case 'More':
                colorIcon = focused ? 'tomato' : 'gray'
                return <PullRequestOutlined style={{color: colorIcon}}/>
                break;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Messages" component={Messages} options={{ title: 'Messages' }}/>
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Timeline" component={Timeline} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}