import React from 'react';
import {Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AuthScreen from './modules/auth/components/AuthScreen';
import GetStartedScreen from './modules/intro/components/GetStartedScreen';
import ExploreScreen from './modules/explore/components/ExploreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const hideScreenHeader = () => null;

function GetStartedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="intro"
        component={GetStartedScreen}
        options={{header: hideScreenHeader}}
      />
    </Stack.Navigator>
  );
}

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{header: hideScreenHeader}}
      />
    </Stack.Navigator>
  );
}

function MainRoutes() {
  return (
    <Tab.Navigator initialRouteName="explore">
      <Tab.Screen name="explore">
        {() => (
          <Stack.Navigator screenOptions={{ header: hideScreenHeader }}>
            <Stack.Screen name="first" component={ExploreScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Me">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="me" component={() => <View></View>} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator initialRouteName="getStarted">
      <Stack.Screen
        name="getStarted"
        component={GetStartedRoutes}
        options={{header: hideScreenHeader}}
      />
      <Stack.Screen
        name="auth"
        component={AuthRoutes}
        options={{header: hideScreenHeader}}
      />
      <Stack.Screen
        name="main"
        component={MainRoutes}
        options={{
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
