import React, {useContext} from 'react';
import {Button, Text} from 'react-native';

import {AuthContext, AuthContextType} from '../../src/Auth/AuthProvider';
import Center from '../../src/Components/Wrapper/Center';

const ProfileScreen: React.FC<{}> = () => {
  const {logout} = useContext<AuthContextType>(AuthContext);

  return (
    <Center>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={logout} />
    </Center>
  );
};

export default ProfileScreen;
