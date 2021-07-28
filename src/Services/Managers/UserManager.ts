import {User} from '../src/Models/User';

export namespace UserManager {
  export const GetEmail: (user: User) => string | null = (user: User) =>
    user?.email ? user.email : null;

  export const GetPassword: (user: User) => string | null = (user: User) =>
    user?.credential?.password ? user.credential.password : null;
}
