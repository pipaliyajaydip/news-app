import React,{useState} from "react";
import { Drawer,SwipeableDrawer,IconButton,List,ListItemButton,ListItemIcon ,ListItemText,Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Health','Technology','Business','Sports'];


const Sidebarmenu = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    return(
    <React.Fragment>
        <Drawer open={openSidebar} onClose={()=>setOpenSidebar(false)}>
            <List>
                {pages.map((page)=>(
                    <ListItemButton active>
                        <ListItemIcon>
                            <ListItemText key={page} onClick={()=>setOpenSidebar(!openSidebar)}>
                                <Typography>{page}</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
        <IconButton onClick={()=>setOpenSidebar(!openSidebar )}>      
            <MenuIcon />
        </IconButton>
    </React.Fragment>
    );
}

const Sidebar = () => {
    return(
        // for close and open sidebar
        <Sidebarmenu />
    )
  
}

export default Sidebar;