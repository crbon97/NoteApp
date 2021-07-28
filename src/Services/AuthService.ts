import {AccessToken, LoginManager} from 'react-native-fbsdk';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {AuthMethod} from '../../src/Auth/Auth';
import {AuthUser} from '../../src/Models/AuthUser';
import {User} from '../../src/Models/User';
import {ErrorHandler} from './Handlers/ErrorHandler';
import {CredentialManager} from './Managers/CreadentialManager';
import {UserManager} from './Managers/UserManager';

class AuthService {
  static ConfigureGoogleSignin = (webClientId: string) => {
    GoogleSignin.configure({webClientId});
  };

  Login: (authUser: AuthUser) => Promise<AuthUser> = (
    authUser: AuthUser,
  ): Promise<AuthUser> => {
    switch (authUser?.authMethod) {
      case AuthMethod.FB_EMAIL_PASSWORD:
        return this.SignInWithEmailAndPassword(authUser.user);
      case AuthMethod.FB_GOOGLE:
        return this.SignInWithGoogle();
      case AuthMethod.FB_FACEBOOK:
        return this.SignInWithFacebook();
      default:
        return Promise.reject('UNKNOWN AUTH METHOD');
    }
  };

  Logout: () => Promise<void> = (): Promise<void> => {
    return auth().signOut();
  };

  private SignInWithEmailAndPassword: (user: User) => Promise<AuthUser> = (
    user: User,
  ): Promise<AuthUser> => {
    // TODO: check null or undefined email password
    const email = UserManager.GetEmail(user)!;
    const password = UserManager.GetPassword(user)!;
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.HandleUserCreadential)
      .catch(ErrorHandler.RejectError);
  };

  private SignInWithGoogle: () => Promise<AuthUser> =
    async (): Promise<AuthUser> => {
      return GoogleSignin.signIn()
        .then(({idToken}) => {
          const googleCredential = CredentialManager.GetCredential(
            idToken,
            AuthMethod.FB_GOOGLE,
          );
          if (googleCredential) {
            return auth()
              .signInWithCredential(googleCredential)
              .then(this.HandleUserCreadential)
              .catch(ErrorHandler.RejectError);
          } else {
            return Promise.reject('NULL AUTH CREDENTIAL');
          }
        })
        .catch(ErrorHandler.RejectError);
    };

  private SignInWithFacebook: () => Promise<AuthUser> =
    async (): Promise<AuthUser> => {
      return LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then((result: any) => {
          console.log(result);
          if (!result.isCancelled) {
            // Once signed in, get the users AccessToken
            return AccessToken.getCurrentAccessToken()
              .then((value: AccessToken | null) => {
                console.log(value);
                if (value) {
                  // Create a Firebase credential with the AccessToken
                  const facebookCredential =
                    auth.FacebookAuthProvider.credential(value.accessToken);

                  // Sign-in the user with the credential
                  return auth()
                    .signInWithCredential(facebookCredential)
                    .then(this.HandleUserCreadential)
                    .catch(ErrorHandler.RejectError);
                } else {
                  return Promise.reject(
                    'Something went wrong obtaining access token',
                  );
                }
              })
              .catch(ErrorHandler.RejectError);
          } else {
            return Promise.reject('User cancelled the login process');
          }
        })
        .catch(ErrorHandler.RejectError);
    };

  private HandleUserCreadential: (
    userCredential: FirebaseAuthTypes.UserCredential,
  ) => Promise<AuthUser> = (
    userCredential: FirebaseAuthTypes.UserCredential,
  ): Promise<AuthUser> => {
    console.log(userCredential);
    const user: User = CredentialManager.GetUser(userCredential)!;
    const authMethod = CredentialManager.GetAuthMethod(userCredential)!;
    const authUser: AuthUser = {user, authMethod};
    return Promise.resolve<AuthUser>(authUser);
  };
}

export default AuthService;
