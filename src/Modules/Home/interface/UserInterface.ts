import { IUserState } from '../../Login/Interface/LoginInterface';
import { IRole } from './RoleInterface';

export interface IUser extends IUserState{
  role:IRole
}
