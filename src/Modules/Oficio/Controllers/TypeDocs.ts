import { http } from '../../../shared/ControllersGlobal/AxiosGlobal';
import { ITypeDocs } from '../interface/DocsGenerate';

export const getTypeDocsHttp = async ():Promise<ITypeDocs[]> => {
  const response = await http.get( '/tipo-documentos' );
  return response.data;
};

export const postHttpTypeDocs = async ( payload:ITypeDocs ):Promise<ITypeDocs> => {
  const response = await http.post( '/documentos/carbone', payload, {
    responseType: 'arraybuffer',
  });
  return response.data;
};
