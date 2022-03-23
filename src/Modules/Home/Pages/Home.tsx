import { Grid } from '@mui/material';
import * as React from 'react';
import { useAppDispatch } from '../../../shared/store/hook';
import { getUserDirectory } from '../Action/User.Reducer';
import { ReviewDoc } from '../components/Cards/ReviewDoc';
import { SentUserSlide } from '../components/Slider/DialogSlide';

export default function Dashboard() {
  const data = [1, 1, 2, 2, 3, 3];
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch( getUserDirectory());
  }, [dispatch]);
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <h1>Recividos</h1>
          </Grid>
          {data.map(( i ) => (
            <Grid item xs={12} md={6} key={i.toString()}>
              <ReviewDoc />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <h1>Realizados</h1>
          </Grid>
          {data.map(( i ) => (
            <Grid item xs={12} md={6} key={i.toString()}>
              <ReviewDoc />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <h1>Pendiente de Revisar</h1>
          </Grid>
          {data.map(( i ) => (
            <Grid item xs={12} md={6} key={i.toString()}>
              <ReviewDoc />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <SentUserSlide />
    </Grid>
  );
}
