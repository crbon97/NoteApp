import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import HomeScreen from '../../src/Screens/Home.Screen';
import IntroScreen from '../../src/Screens/Intro.Screen';
import LoginScreen from '../../src/Screens/Login.Screen';
import RegisterScreen from '../../src/Screens/Register.Screen';
import AuthService from '../../src/Services/AuthService';
import {AUTH, AUTH_STACK_ROUTES} from '../../src/Utils/Constants';

const AuthStack = createStackNavigator<AuthStackParamList>();

AuthService.ConfigureGoogleSignin(AUTH.WEB_CLIENT_ID);

const AuthStacks = () => {
  return (
    <AuthStack.Navigator screenOptions={{header: () => null}}>
      <AuthStack.Screen
        name={AUTH_STACK_ROUTES.INTRO}
        component={IntroScreen}
      />
      <AuthStack.Screen
        name={AUTH_STACK_ROUTES.LOGIN}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name={AUTH_STACK_ROUTES.REGISTER}
        component={RegisterScreen}
      />
      <AuthStack.Screen name={AUTH_STACK_ROUTES.HOME} component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStacks;

export type AuthStackPropType<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

type AuthStackParamList = {
  Intro: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};
