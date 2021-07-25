/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import auth from '@react-native-firebase/auth';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {StyleSheet} from 'react-native';

GoogleSignin.configure({
  webClientId: process.env.GOOGLE_CLIENT_ID,
});
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
  };
  const signIn = async () => {
    try {
      console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID);

      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      console.log('accessToken', accessToken);
      console.log('idToken', idToken);

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth()
        .signInWithCredential(credential)
        .then(result => {
          console.log('result', result);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    console.log('logot');
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <GoogleSigninButton
            style={styles.googleSignInButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={signIn}
          />
          <TouchableOpacity onPress={signOut}>
            <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('click');
            }}>
            <Text>Press test</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  googleSignInButton: {
    minWidth: 300,
    height: 55,
    marginBottom: 10,
    marginTop: 20,
  },
});
