import React from 'react';
import {Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AuthScreen from './modules/auth/AuthScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const hideScreenHeader = () => null;

function AuthRouters() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={AuthScreen}
        options={{header: hideScreenHeader}}
      />
    </Stack.Navigator>
  );
}

function MainRouters() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={() => (
          <View>
            <Text>asldkajsd</Text>
          </View>
        )}
      />
      <Tab.Screen
        name="Me"
        component={() => (
          <View>
            <Text>asldkajsd</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen
        name="auth"
        component={AuthRouters}
        options={{ header: hideScreenHeader }}
      />
      <Stack.Screen
        name="main"
        component={MainRouters}
        options={{
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
