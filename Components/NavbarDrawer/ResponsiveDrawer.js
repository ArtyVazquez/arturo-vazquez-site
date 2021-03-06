import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';


import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';




const drawerWidth = 200;

function ResponsiveDrawer(props) {

  function createListItems(name, icon) {
    return {name, icon}
  }



  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerItems = [createListItems('About', <PersonIcon />), createListItems('Education', <SchoolIcon />), createListItems('Skills', <WysiwygIcon />),
  createListItems('Projects', <CodeIcon />), createListItems('Contact', <ConnectWithoutContactIcon />)];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {drawerItems.map((item, index) => {
                return (
                    <ListItem key={index} button onClick={() => {
                      router.push(item.name !== 'About' ? `/${item.name}`: `/`);
                      setMobileOpen(false);
                      }}>
                      <ListItemIcon>
                          {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                )
              }
          )
        }

        <ListItem sx={{display: 'flex', justifyContent: 'center'}}>
            {props.mode}
        </ListItem>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ 
        display: 'flex',
        bgcolor: 'background.default',
        color: 'text.primary' }}>
        
        <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ m: 1, display: { sm: 'none' }, height: '3rem', position: 'absolute'}}
            >
                <MenuIcon />
        </IconButton>

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
            {drawer}
            </Drawer>
            
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
