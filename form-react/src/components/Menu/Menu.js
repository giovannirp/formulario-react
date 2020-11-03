import React, {useState} from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';

function MenuGeral() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <Button 
                aria-controls="fade-menu"
                aria-aria-haspopup="true"
                onClick={(event) => {
                   setAnchorEl(event.currentTarget);
                }}
            >
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={handleClose}
                >
                    Provile
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                >
                    Outro Menu
                </MenuItem>
            </Menu>
        </div>
    )
}

export default MenuGeral;