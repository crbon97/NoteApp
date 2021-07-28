import React from 'react';
import {Button, Text} from 'react-native';

import Center from '../../src/Components/Wrapper/Center';
import {AuthStackPropType} from '../../src/Routes/AuthStacks';
import {AUTH_STACK_ROUTES} from '../../src/Utils/Constants';

const RegisterScreen: React.FC<
  AuthStackPropType<typeof AUTH_STACK_ROUTES.REGISTER>
> = ({navigation}: AuthStackPropType<typeof AUTH_STACK_ROUTES.REGISTER>) => {
  const onGoToLogin = () => {
    navigation.navigate(AUTH_STACK_ROUTES.LOGIN);
  };

  return (
    <Center>
      <Text>Register Screen</Text>
      <Button title="Login" onPress={onGoToLogin} />
    </Center>
  );
};

export default RegisterScreen;
