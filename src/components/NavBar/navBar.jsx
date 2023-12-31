import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Menu, MenuItem, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NewsList from "../News/newsList";

// sidebar for mobile screen
import Sidebar from "./ForMobile/sidebar";
import BottomNavBar from "./ForMobile/bottom_nav_bar";

//why we use React.Fragment beacuse div html dom take more time and memory insted of this we use React.Fragment...

const settingList = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = (props) => {

    // for tabs navigation indicator
    const [value, setValue] = useState(0);

    // for open and close menubar user set ting
    const [userOpen, setUserOpen] = useState(null);

    //for catagory
    const [catagory, setCatagory] = useState("")
    const [search, setSearch] = useState("")

    // for catagory handle
    const handleCategoryClick = (categoryTerm) => {
        setCatagory(categoryTerm);
        setSearch(categoryTerm);
    }

    // open
    const handleOpenUserMenu = (event) => {
        setUserOpen(event.currentTarget);
    }
    // close
    const handleCloseUserMenu = () => {
        setUserOpen(null)
    }

    // for mobile screen sidebar function
    const theme = useTheme();
    // console.log(theme)

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(isMatch);


    return (
        <React.Fragment>
            <header>
            <AppBar>
                <Toolbar>
                    {isMatch ? (
                        <>
                            <Sidebar onClick={() => handleCategoryClick("sports")} />
                            <Typography sx={{ flexGrow: 1, textAlign:'center'}} variant='h5' >TOP-NEWS</Typography>
                            <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
                                <Tooltip title='Open settings'>
                                    <AccountCircleIcon fontSize="large" onClick={handleOpenUserMenu} />
                                </Tooltip>

                                <Menu
                                    sx={{ mt: '45px' }}
                                    
                                    anchorEl={userOpen}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left'
                                    }}
                                    open={Boolean(userOpen)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settingList.map((setting) => (
                                        <MenuItem key={setting} >
                                            <Typography textAlign='center'>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <BottomNavBar />
                        </>
                    ) : (
                        <>
                            <NewspaperIcon fontSize="large" />
                            <Typography
                              variant="h6"
                              noWrap
                              component="a"
                              href="/"
                              sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                              }}
                            >
                              TOP-NEWS
                            </Typography>
                            <Tabs sx={{ marginLeft: 'auto' }}
                                textColor='inherit' value={value} onChange={(e, value) => setValue(value)} TabIndicatorProps={{
                                    style: {
                                        backgroundColor: 'orange'
                                    }
                                }}>
                                <Tab label='Health' onClick={() => handleCategoryClick("health")} /> 
                                <Tab label='Technology' onClick={() => handleCategoryClick("technology")} />
                                <Tab label='Business' onClick={() => handleCategoryClick("business")} />
                                <Tab label='Sports' onClick={() => handleCategoryClick("sports")} />
                                {/* <Tab label={<AccountCircleIcon fontSize="large" />} disabled/> */}
                            </Tabs>


                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title='Open settings'>
                                    <AccountCircleIcon fontSize="large" onClick={handleOpenUserMenu} />
                                </Tooltip>

                                <Menu
                                    sx={{ mt: '45px' }}

                                    anchorEl={userOpen}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left'
                                    }}
                                    open={Boolean(userOpen)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settingList.map((setting) => (
                                        <MenuItem key={setting} >
                                            <Typography textAlign='center'>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            </header>
            <NewsList catagory={catagory} search={search}/>
        </React.Fragment>
    )
}

export default NavBar;
