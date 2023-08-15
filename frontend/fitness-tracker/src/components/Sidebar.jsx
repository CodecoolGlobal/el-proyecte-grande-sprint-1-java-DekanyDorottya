import {
    AccountBox,
    Article,
    Checklist,
    Home,
    ModeNight,
    Settings,
    ControlPoint,
} from '@mui/icons-material';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from '@mui/material';
import React from 'react';

const Sidebar = ({ mode, setMode, isLoggedIn, handleLogout }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='-webkit-sticky'>
                <List>
                    {/* I could not decide if the home and about part is better here or in Navbar */}
                    {isLoggedIn && (
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='calorie'>
                                    <ListItemIcon>
                                        <ControlPoint />
                                    </ListItemIcon>
                                    <ListItemText primary='Add calorie' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component='a'
                                    href='yourDailyCalorie'
                                >
                                    <ListItemIcon>
                                        <Checklist />
                                    </ListItemIcon>
                                    <ListItemText primary='Check calories' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='activity'>
                                    <ListItemIcon>
                                        <ControlPoint />
                                    </ListItemIcon>
                                    <ListItemText primary='Add activity' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component='a'
                                    href='yourDailyActivity'
                                >
                                    <ListItemIcon>
                                        <Checklist />
                                    </ListItemIcon>
                                    <ListItemText primary='Check activities' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component='a'
                                    href='#simple-list'
                                >
                                    <ListItemIcon>
                                        <Settings />
                                    </ListItemIcon>
                                    <ListItemText primary='soon data?' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component='a'
                                    href='#simple-list'
                                >
                                    <ListItemIcon>
                                        <AccountBox />
                                    </ListItemIcon>
                                    <ListItemText primary='Profile' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    )}
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#simple-list'>
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch
                                onChange={(e) =>
                                    setMode(mode === 'light' ? 'dark' : 'light')
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            
        </Box>
    );
};

export default Sidebar;