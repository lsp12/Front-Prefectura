import { http } from '../../../shared/ControllersGlobal/AxiosGlobal';
import { ILoginState, IUserState } from '../Interface/LoginInterface';

export const login = async ( data: ILoginState ):Promise<IUserState> => {
  const response = await http.post( '/users/login', data );
  return response.data;
};

export const getUserLogg = async ( id:string ):Promise<IUserState> => {
  const response = await http.get( `/users/${id}` );
  return response.data;
};
