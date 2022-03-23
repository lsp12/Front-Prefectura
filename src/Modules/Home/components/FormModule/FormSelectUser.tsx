/* eslint-disable react/no-array-index-key */
import {
  SelectChangeEvent, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Checkbox, ListItemText,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../shared/store/hook';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function MultipleSelect() {
  const { users } = useAppSelector(( state ) => state.user );
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = ( event: SelectChangeEvent<typeof personName> ) => {
    const { target: { value } } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split( ',' ) : value,
    );
  };

  useEffect(() => {
    console.log( personName );
  }, [personName]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={( selected ) => selected.join( ', ' )}
          MenuProps={MenuProps}
        >
          {users.length < 0 && users.map(( user, index ) => (
            <MenuItem key={index.toString()} value={user.name}>
              <Checkbox checked={personName.indexOf( user?.id!.toString()) > -1} />
              <ListItemText primary={user.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
