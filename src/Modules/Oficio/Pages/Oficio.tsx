/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-shadow */
import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { pdfjs } from 'react-pdf';
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

  useEffect(() => {
    if ( src ) {
      const blob:any = new Blob([src], { type: 'application/pdf' });
      const fileURL = window.URL.createObjectURL( blob );
      setUrl( fileURL );
    }
  }, [src]);

  console.log({ url });
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <SelectDoc setDoc={setSrc} />
      </Grid>
      <Grid item xs={12} md={8}>
        <iframe
          src={url}
          width="100%"
          height="600px"
          title="oficio"
          frameBorder="0"
          allowFullScreen
        />

      </Grid>
      <Button onClick={() => {
        const blob:any = new Blob([src], { type: 'application/pdf' });
        const url = window.URL.createObjectURL( blob );
        setUrl( url );
      }}
      >
        Descargar
      </Button>
    </Grid>
  );
}
