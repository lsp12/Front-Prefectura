/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl, Button, Autocomplete, TextField, Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { toast } from 'react-toastify';
import { http } from '../../../../shared/ControllersGlobal/AxiosGlobal';
import { useAppSelector } from '../../../../shared/store/hook';
import { IFormSelectDoc } from '../../interface/DocsGenerate';
import 'moment/locale/fr';
import 'moment/locale/es';

interface IProps {
  setDoc: any
}

export function SelectDoc({ setDoc }: IProps ) {
  moment().locale( 'es' );
  const { Typedocs } = useAppSelector(( state ) => state.docs );
  const { user } = useAppSelector(( state ) => state.login );

  const {
    handleSubmit, setFieldValue, values, errors, touched, getFieldProps,
  } = useFormik<IFormSelectDoc>({
    initialValues: {
      typeDoc: null,
      cuerpo: '',
    },
    enableReinitialize: true,
    onSubmit: async ( formValues ) => {
      const date = moment( new Date()).format( 'MMMM-Do-YYYY' );
      console.log( date );
      formValues.date = date;
      formValues.name = user?.name;

      try {
        toast.loading( 'Generando documento...', {
          position: toast.POSITION.TOP_CENTER,
        });
        const response = await http.post( '/documentos/carbone', {
          ...formValues,
          typeDoc: formValues.typeDoc?.nombre,
        }, {
          responseType: 'arraybuffer',
        });
        toast.dismiss();
        setDoc( response.data );
        console.log( response );
        toast.success( 'Documento generado con exito', {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch ( error:any ) {
        console.log( error );
        toast.dismiss();
        toast.error( error.message, {
          position: toast.POSITION.TOP_CENTER,
          data: {
            code: error.response?.status,
          },
        });
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="false"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              id="proveedor"
              value={values.typeDoc}
              onChange={( _, value ) => setFieldValue( 'typeDoc', value )}
              getOptionLabel={( option ) => option.nombre}
              options={Typedocs || []}
              isOptionEqualToValue={( option, value ) => option.id === value.id}
              fullWidth
              renderInput={( params ) => (
                <TextField
                  {...params}
                  error={!!errors.typeDoc && touched.typeDoc}
                  helperText={touched.typeDoc && errors.typeDoc}
                  label="Selescione el tipo de documento"
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número de documento"
            multiline
            rows={15}
            {...getFieldProps( 'cuerpo' )}
            error={!!errors.cuerpo && touched.cuerpo}
            helperText={touched.cuerpo && errors.cuerpo}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit">
            Generar Documento
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
