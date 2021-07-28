import {UserCredential} from './UserCredential';

export type User = IUser | null;

interface IUser {
  uid?: string;
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  credential?: UserCredential;
}
