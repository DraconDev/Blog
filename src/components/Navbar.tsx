import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const pages = ["Posts", "Courses", "About"];
const settings = [""];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
            <Toolbar
                disableGutters
                sx={{
                    backgroundColor: "primary.dark",
                    m: 0,
                    p: 1,
                    px: 3,
                    alignItems: "center",
                    display: "flex",
                }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "text.primary",
                        textDecoration: "none",
                        fontSize: "2rem",
                    }}
                >
                    Bip Bop
                </Typography>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: {
                            xs: "flex",
                            md: "flex",
                            justifyContent: "flex-start",
                        },
                    }}
                >
                    {pages.map((page) => (
                        <Button
                            key={page}
                            href={`/${page}`}
                            sx={{
                                color: "secondary.light",
                                display: "block",
                                justifyContent: "center",
                                m: 1,
                                fontSize: "1.5rem",
                            }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
