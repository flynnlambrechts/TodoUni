import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Title from "./Title";
import NightModeToggle from "./NightModeToggle";
import { base_url } from "../config";

const pages = {
    Grid: "grid",
    "Grade Calculator": "grade-calculator",
};
const settings = ["Logout", "Login", "Register"];

const DesktopMenu = ({ pages, handleClose }) => (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
        {Object.keys(pages).map((page) => (
            <Link
                key={page}
                style={{ textDecoration: "none" }}
                to={base_url + pages[page]}>
                <Button sx={{ display: "block", color: "white" }}>
                    <Typography>{page}</Typography>
                </Button>
            </Link>
        ))}
    </Box>
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
        <AppBar position="sticky" sx={{ border: 1, borderColor: "grey.600" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Title sx={{ display: { xs: "none", md: "flex" } }} />
                    <DesktopMenu
                        pages={pages}
                        handleClose={handleCloseNavMenu}
                    />
                    <NightModeToggle />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
