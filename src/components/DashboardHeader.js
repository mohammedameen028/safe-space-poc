import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const DashboardHeader = () => {
return(
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: '#20124d', color: '#da4360', fontWeight: 'bold'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Button color="inherit" style={{fontWeight: 'bold'}}>Admin</Button>
        </Toolbar>
      </AppBar>
    </Box>
)
}


export default DashboardHeader;