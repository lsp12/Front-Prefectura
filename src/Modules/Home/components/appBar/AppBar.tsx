import {
  Toolbar, IconButton, Typography, AppBar, Box, CssBaseline, Drawer, Badge, BadgeProps,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { styled } from '@mui/material/styles';
import { Sidebar } from '../sideBar/SideBar';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const StyledBadge = styled( Badge )<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export function AppBarC( props: Props ) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState( false );

  const handleDrawerToggle = () => {
    setMobileOpen( !mobileOpen );
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div" id="layout">
              Prefectura de los rios
            </Typography>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <NotificationsActiveIcon />
              </StyledBadge>
            </IconButton>

            {/* <Button
              variant="contained"
              onClick={() => {
                console.log( 'logout' );
              }}
            >
              Cerrar Sesión
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
