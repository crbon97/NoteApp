import React, {useContext} from 'react';
import {Button, Text} from 'react-native';

import {AuthMethod} from '../Auth/Auth';
import {AuthContext, AuthContextType} from '../Auth/AuthProvider';
import Center from '../Components/Wrapper/Center';
import {AuthUser} from '../Models/AuthUser';
import {AuthStackPropType} from '../Routes/AuthStacks';
import {AUTH_STACK_ROUTES} from '../Utils/Constants';

const LoginScreen: React.FC<AuthStackPropType<typeof AUTH_STACK_ROUTES.LOGIN>> =
  ({navigation}: AuthStackPropType<typeof AUTH_STACK_ROUTES.LOGIN>) => {
    const {login} = useContext<AuthContextType>(AuthContext);

    const onLoginWithEmailAndPassword = async () => {
      const authUser: AuthUser = {
        user: {
          email: 'mytest.mail@gmail.com',
          credential: {
            password: 'admin123',
          },
        },
        authMethod: AuthMethod.FB_EMAIL_PASSWORD,
      };
      await login(authUser);
    };

    const onLoginWithGoogle = async () => {
      const authUser: AuthUser = {
        user: null,
        authMethod: AuthMethod.FB_GOOGLE,
      };
      await login(authUser);
    };

    const onLoginWithFacebook = async () => {
      const authUser: AuthUser = {
        user: null,
        authMethod: AuthMethod.FB_FACEBOOK,
      };
      await login(authUser);
    };

    const onGoToRegister = () => {
      navigation.navigate(AUTH_STACK_ROUTES.REGISTER);
    };

    return (
      <Center>
        <Text>Login Screen</Text>
        <Button title="Login" onPress={onLoginWithEmailAndPassword} />
        <Button title="Login with Google" onPress={onLoginWithGoogle} />
        <Button title="Login with Facebook" onPress={onLoginWithFacebook} />
        <Button title="Register" onPress={onGoToRegister} />
      </Center>
    );
  };

export default LoginScreen;
