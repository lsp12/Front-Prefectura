import {
  Button, Card, CardActions, CardContent, Typography,
} from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../../shared/store/hook';
import { setSlider } from '../../slice/Home.slice';

export function ReviewDoc() {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div" />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Revisar</Button>
        <Button
          size="small"
          onClick={() => {
            dispatch( setSlider( true ));
          }}
        >
          Enviar documento

        </Button>
        <Button size="small">Eliminar documento</Button>
      </CardActions>
    </Card>
  );
}
