import {AuthUser} from '../src/Models/AuthUser';

export namespace AuthUserManager {
  export const GetAuthUser: (userString: string | null) => AuthUser = (
    userString: string | null,
  ): AuthUser => userString && JSON.parse(userString);
}
