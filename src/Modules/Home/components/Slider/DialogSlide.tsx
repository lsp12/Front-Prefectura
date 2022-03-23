/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import Slide from '@mui/material/Slide';
import { useAppDispatch, useAppSelector } from '../../../../shared/store/hook';
import { setSlider } from '../../slice/Home.slice';
import { MultipleSelect } from '../FormModule/FormSelectUser';

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} /> );

export function SentUserSlide() {
  const { slider } = useAppSelector(( state ) => state.home );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch( setSlider( !slider ));
  };

  return (
    <div>
      <Dialog
        open={slider}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>A quien le quieres enviar este documento?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container>
              <Grid item xs={12} md={6}>
                <MultipleSelect />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
