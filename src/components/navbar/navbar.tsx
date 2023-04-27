import React from "react";
import {
    AppBar,
    Typography,
    useMediaQuery,
    Grid,
    Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import twitter from "./twitter.svg";
import telegram from "./telegram.svg";
import "./navbar.scss";
import { ConnectKitButton } from "connectkit";
import { elipsify } from "../../utils/utils";

const pages = [
    // {
    //     title: "Tools",
    //     url: "https://www.gnosis.builders/tools",
    // },
    // {
    //     title: "Developers",
    //     url: "https://www.gnosis.builders/developers",
    // },
    // {
    //     title: "Users",
    //     url: "https://www.gnosis.builders/users",
    // },
    // {
    //     title: "Validators",
    //     url: "https://www.gnosis.builders/validators",
    // },
    // {
    //     title: "Community",
    //     url: "https://www.gnosis.builders/community",
    // },
    {
        title: "Private Auction Signer",
        url: "#",
    },
    // {
    //     title: "Contact",
    //     url: "https://www.gnosis.builders/contact-us",
    // },
    // {
    //     title: "Careers",
    //     url: "https://www.gnosis.builders/careers",
    // },
];

export const NavBar: React.FC = () => {
    const isTabletOrMobile = useMediaQuery("(max-width:960px)");

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const connectWallet = (show: () => void) => {
        show();
    };

    return (
        <div className="navbar__root">
            <AppBar color="transparent" position="static">
                <Container maxWidth="xl" style={{ padding: 0, margin: 0, height: 80 }}>
                    {isTabletOrMobile ? (
                        <Grid container className="navbar__container-small">
                            <a
                                href="https://www.gnosis.builders/"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="navbar__logo__no-design"
                            >
                                <img
                                    src="/images/navbarLogo.png"
                                    alt="Gnosis Builders"
                                    className="navbar__logo-small"
                                />
                            </a>
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
                                    horizontal: "right",
                                }}
                                // transformOrigin={{
                                //     vertical: "top",
                                //     horizontal: "right",
                                // }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.title}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography key={page.title} sx={{ padding: "0 5px" }}>
                                            <a
                                                target="_blank"
                                                className="navbar__button-small"
                                                href={page.url}
                                            >
                                                {page.title}
                                            </a>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                    ) : (
                        <Grid container spacing={0}>
                            <Grid item xs={2.4}>
                                <div className="navbar__logo__container">
                                <a
                                    href="https://www.gnosis.builders/"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    className="navbar__logo__no-design"
                                >
                                    <img
                                        src="/images/navbarLogo.png"
                                        alt="Gnosis Builders"
                                        className="navbar__logo-small"
                                    />
                                </a>
                                </div>
                            </Grid>
                            <Grid item xs={6.6}>
                                <Grid container spacing={0} className="navbar__pages__container">
                                    {pages.map((page) => (
                                        <Grid item
                                            key={page.title}
                                        >
                                            <Typography style={{ margin: 0 }} key={page.title}>
                                                <a
                                                    target="_blank"
                                                    className="navbar__button-small"
                                                    href={page.url}
                                                >
                                                    {page.title}
                                                </a>
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={0.8}>
                                <Grid container spacing={0} className="navbar__social__container">
                                    <Grid item xs={4}>
                                        <div>
                                            <a
                                                className="navbar__social-logo"
                                                href="https://twitter.com/gnosisbuilders"
                                                target="_blank"
                                            >
                                                <img
                                                    className="navbar__social-logo-image"
                                                    src={twitter}
                                                    alt="Gnosis Twitter"
                                                />
                                            </a>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div>
                                            <a
                                                className="navbar__social-logo"
                                                href="https://t.me/GnosisBuildersCommunity"
                                                target="_blank"
                                            >
                                                <img
                                                    className="navbar__social-logo-image"
                                                    src={telegram}
                                                    alt="Gnosis Telegram"
                                                />
                                            </a>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={2.2}>
                                <ConnectKitButton.Custom>
                                {({ isConnected, show, address }) => {
                                    return (
                                        <Button
                                            className="main__content-box__button"
                                            variant="outlined"
                                            onClick={() =>
                                                connectWallet(
                                                    show as () => void
                                                )
                                            }
                                            style={{ margin: "50em" }}
                                        >
                                            {isConnected === true
                                                ? elipsify(address as string)
                                                : "Connect"}
                                        </Button>
                                    );
                                }}
                            </ConnectKitButton.Custom>
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </AppBar>
        </div>
    );
};

export default NavBar;
