import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Title from "./Title";
import NightModeToggle from "./NightModeToggle";
import { base_url } from "../config";

const pages = {
    "Grid": "grid",
    "Grade Calculator": "grade-calculator",
};
const settings = ["Logout", "Login", "Register"];

const MobileMenu = ({ anchorEl, handleClose }) => (
    <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
            display: { xs: "block", md: "none" },
        }}>
        {Object.keys(pages).map((page) => (
            <MenuItem key={page} onClick={handleClose}>
                <Typography textAlign="center">{page}</Typography>
            </MenuItem>
        ))}
    </Menu>
);

const DesktopMenu = ({ pages, handleClose }) => (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
        {Object.keys(pages).map((page) => (
            <Link
                key={page}
                style={{ textDecoration: "none" }}
                to={base_url + pages[page]}>
                <Button
                    onClick={handleClose}
                    sx={{ my: 2, display: "block", color: "white" }}>
                    <Typography>{page}</Typography>
                </Button>
            </Link>
        ))}
    </Box>
);

const UserMenu = ({ anchorEl, handleClose }) => (
    <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleClose}>
                <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
        ))}
    </Menu>
);

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Title sx={{ display: { xs: "none", md: "flex" } }} />

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <MobileMenu
                            anchorEl={anchorElNav}
                            handleClose={handleCloseNavMenu}
                        />
                    </Box>

                    <DesktopMenu
                        pages={pages}
                        handleClose={handleCloseNavMenu}
                    />

                    <NightModeToggle />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                                color="inherit"
                                sx={{ p: 0 }}>
                                <AccountCircle sx={{ fontSize: 30 }} />
                            </IconButton>
                        </Tooltip>
                        <UserMenu
                            anchorEl={anchorElUser}
                            handleClose={handleCloseUserMenu}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
