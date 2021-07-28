import {AuthMethod} from '../Auth/Auth';
import {User} from './User';

export type AuthUser = IAuthUser | null;

interface IAuthUser {
  user: User;
  authMethod: AuthMethod;
}
