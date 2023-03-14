import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './MainLayout/Header/index'
import { AppBar, CssBaseline, Toolbar,  } from '@mui/material';
import {  useTheme } from '@mui/material/styles';
import { SET_MENU } from './store/actions.js';









function App() {
  const theme = useTheme()
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
      dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  return (
    <div className="App">
      <header className="App-header">
        To Do List
        <CssBaseline />
        <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
      </header>
    </div>
);
}


export default App;
