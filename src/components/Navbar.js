import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Hiragana', path: '/hiragana' },
    { text: 'Katakana', path: '/katakana' },
    { text: 'Kanji', path: '/kanji' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          button
          component={RouterLink}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(30, 144, 255, 0.1)',
            },
          }}
        >
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              style: {
                color: '#1E90FF',
                fontWeight: 'bold',
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="static"
      sx={{
        background: 'linear-gradient(45deg, #1E90FF 30%, #4DA6FF 90%)',
        boxShadow: '0 4px 8px rgba(30, 144, 255, 0.3)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
            fontWeight: 'bold',
            '&:hover': {
              color: '#FF6B6B',
            },
          }}
        >
          Doraemon's Japanese Learning
        </Typography>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                color: '#FF6B6B',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FF6B6B',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: '#F0F8FF',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 