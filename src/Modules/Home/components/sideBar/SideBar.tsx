import { ExpandLess, ExpandMore, Home } from '@mui/icons-material';
import {
  Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export function Sidebar() {
  const [open, setOpen] = React.useState( false );
  return (
    <Box>

      <List
        component="nav"
      >
        <ListItemButton onClick={() => setOpen( !open )} sx={{ width: '100%' }}>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>

            <NavLink to="/" style={{ textDecoration: 'none', color: '#767676' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </NavLink>

          </List>

        </Collapse>
      </List>

    </Box>
  );
}
