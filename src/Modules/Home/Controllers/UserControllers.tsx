import { http } from '../../../shared/ControllersGlobal/AxiosGlobal';
import { IUser } from '../interface/UserInterface';

export const getUserDirectoryHttp = async (): Promise<IUser[]> => {
  const data = await http.get( '/users/director' );
  return data.data;
};
