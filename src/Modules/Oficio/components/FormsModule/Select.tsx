import {
  Box, FormControl, Button, Autocomplete, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { http } from '../../../../shared/ControllersGlobal/AxiosGlobal';
import { useAppSelector } from '../../../../shared/store/hook';
import { IFormSelectDoc } from '../../interface/DocsGenerate';

interface IProps {
  setDoc: any
}

export function SelectDoc({ setDoc }: IProps ) {
  /* moment( new Date()).format( 'MMM Do YY' ) */
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
      formValues.date = '2020-05-05';
      formValues.name = user?.name;

      const response = await http.post( '/documentos/carbone', {
        ...formValues,
        typeDoc: formValues.typeDoc?.nombre,
      }, {
        responseType: 'arraybuffer',
      });
      setDoc( response.data );
      console.log( response );
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="false"
    >
      <Box display="flex">
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
        <TextField
          label="Número de documento"
          {...getFieldProps( 'cuerpo' )}
          error={!!errors.cuerpo && touched.cuerpo}
          helperText={touched.cuerpo && errors.cuerpo}
          fullWidth
        />
        <Button type="submit">
          Generar Documento
        </Button>
      </Box>
    </form>
  );
}
