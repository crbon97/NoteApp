import React, {useContext, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext, AuthContextType} from '../../src/Auth/AuthProvider';
import SplashScreen from '../../src/Screens/Splash.Screen';
import {ErrorHandler} from '../../src/Services/Handlers/ErrorHandler';
import {AuthUserManager} from '../../src/Services/Managers/AuthUserManager';
import {AS} from '../../src/Utils/Constants';
import RootStacks from './AuthStacks';
import HomeTabs from './HomeTabs';

const RootRoutes: React.FC<{}> = () => {
  const {authUser, login} = useContext<AuthContextType>(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem(AS.USER)
      .then((currentUser: string | null) => {
        if (currentUser) {
          login(AuthUserManager.GetAuthUser(currentUser));
        }
        setLoading(false);
      })
      .catch(ErrorHandler.HandleAuthError);
    setLoading(false);
  }, []);

  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        {authUser ? <HomeTabs /> : <RootStacks />}
      </NavigationContainer>
    );
  }
};

export default RootRoutes;
