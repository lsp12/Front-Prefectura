/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useAppDispatch } from '../../../shared/store/hook';
import { GetTypeDocs } from '../Action/TypeDocs.Reducer';
import { SelectDoc } from '../components/FormsModule/Select';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Oficio() {
  const dispatch = useAppDispatch();
  const [src, setSrc] = React.useState<any>();
  const [url, setUrl] = React.useState<any>();
  useEffect(() => {
    dispatch( GetTypeDocs());
  }, [dispatch]);

  const [numPages, setNumPages] = React.useState( null );
  const [pageNumber, setPageNumber] = React.useState( 1 );

  function onDocumentLoadSuccess({ numPages }: any ) {
    setNumPages( numPages );
  }

  const fileToBase64 = ( file:any, cb:any ) => {
    const reader = new FileReader();
    reader.readAsDataURL( file );
    reader.onload = function () {
      cb( null, reader.result );
    };
    reader.onerror = function ( error ) {
      cb( error, null );
    };
  };

  console.log({ url });
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12}>
        <SelectDoc setDoc={setSrc} />
      </Grid>
      <Grid item xs={12} md={12}>
        <iframe
          src={url}
          width="100%"
          height="600px"
          title="oficio"
          frameBorder="0"
          allowFullScreen
        />

      </Grid>

    </Grid>
  );
}
