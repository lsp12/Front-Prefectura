export interface ITypeDocs{
  id?: number;
  nombre: string;
}

export interface IFormSelectDoc{
  typeDoc: ITypeDocs | null;
  name?: string;
  cuerpo?: string;
  date?: string;
}
