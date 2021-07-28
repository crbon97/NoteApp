import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {AuthMethod} from '../../../src/Auth/Auth';
import {User} from '../../../src/Models/User';
import {AUTH} from '../../../src/Utils/Constants';

export namespace CredentialManager {
  export const GetCredential: (
    token: string | null,
    authMethod: AuthMethod,
  ) => FirebaseAuthTypes.AuthCredential | null = (
    token: string | null,
    authMethod: AuthMethod,
  ): FirebaseAuthTypes.AuthCredential | null => {
    switch (authMethod) {
      case AuthMethod.FB_GOOGLE:
        return auth.GoogleAuthProvider.credential(token);
      default:
        return null;
    }
  };

  export const GetUser: (
    userCredential: FirebaseAuthTypes.UserCredential,
  ) => User = (userCredential: FirebaseAuthTypes.UserCredential): User => {
    const user: User = {
      uid: userCredential.user.uid,
      username: userCredential.user.displayName,
      email: userCredential.user.email,
      phone: userCredential.user.phoneNumber,
      credential: null,
    };
    return user;
  };

  export const GetAuthMethod: (
    userCredential: FirebaseAuthTypes.UserCredential,
  ) => AuthMethod = (
    userCredential: FirebaseAuthTypes.UserCredential,
  ): AuthMethod => {
    switch (userCredential.additionalUserInfo?.providerId) {
      case AUTH.PROVIDER_ID.GOOGLE_COM:
        return AuthMethod.FB_GOOGLE;
      case AUTH.PROVIDER_ID.FACEBOOK_COM:
        return AuthMethod.FB_FACEBOOK;
      default:
        return AuthMethod.FB_EMAIL_PASSWORD;
    }
  };
}
