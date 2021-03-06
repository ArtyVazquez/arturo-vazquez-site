import { useState, createContext, useMemo, useContext, useEffect } from 'react';
import ResponsiveDrawer from '../Components/NavbarDrawer/ResponsiveDrawer'
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useCookies } from 'react-cookie';
import '../styles/globals.css'

const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Component that will toggle light/dark mode themes...
function ThemeMode() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (      
      <ListItemIcon  onClick={() => colorMode.toggleColorMode(true)} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </ListItemIcon>
  );
}

function MyApp({ Component, pageProps }) {
  const [cookies, setCookie] = useCookies(['theme']); // save theme mode in cookie
  const [mode, setMode] = useState('dark'); // light mode by default
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (isToggle) => {
        if (isToggle){
          setCookie('theme', cookies.theme === 'light'? 'dark':'light');
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        } else {
          setMode(cookies.theme);
        }
      },
    }),
    [setCookie, cookies.theme],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  // set the theme to be whats in the theme cookie
  useEffect(() => {
    if (cookies.theme === undefined)
      setCookie('theme', 'dark', {path: '/'});

    colorMode.toggleColorMode(false);
  },[colorMode, setCookie, cookies.theme]);

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
         
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'row',
              overflowX: 'hidden'
             }}>
            <ResponsiveDrawer mode={<ThemeMode />}/>
            <Box
             sx={{
              bgcolor: 'background.default',
              color: 'text.primary',
              minHeight: '100vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
              }}>
              <Component {...pageProps} />
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default MyApp;