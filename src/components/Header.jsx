import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";

// Styled Search Bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: "#F9FAFB",
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: 600,
  border: "1px solid #D0D5DD",
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    marginTop: theme.spacing(1),
    maxWidth: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: theme.spacing(4),
  fontFamily: "Urbanist, sans-serif",
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #EAECF0",
        px: { xs: 1, md: 3 },
        // py: 1,
      }}
    >
      <Toolbar sx={{ 
        display: "flex", 
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
      }}>
        {/* Left: Logo and Search */}
        <Box sx={{
          display: "flex", 
          justifyContent: "space-between", 
          gap: { xs: 2, md: 10 },
          width: isMobile ? "100%" : "auto",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
        }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontWeight: "bold",
              color: "#7F56D9",
              fontFamily: "Urbanist, sans-serif",
              flexShrink: 0,
            }}
          >
            FOREIGN JAO
          </Typography>

          {/* Center: Search Bar */}
          <Box sx={{ 
            flexGrow: isMobile ? 0 : 1, 
            display: "flex", 
            justifyContent: "center",
            width: isMobile ? "100%" : "auto",
          }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#667085" }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search" />
            </Search>
          </Box>
        </Box>
        
        {/* Right: Icons */}
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 2,
          mt: isMobile ? 1 : 0,
          width: isMobile ? "100%" : "auto",
          justifyContent: isMobile ? "space-between" : "flex-end",
        }}>
          <IconButton>
            <Badge color="error" variant="dot">
              <NotificationsIcon sx={{ color: "#667085" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <InboxIcon sx={{ color: "#667085" }} />
            </Badge>
          </IconButton>
          {/* {!isMobile && (
            <IconButton>
              <AccountCircle sx={{ color: "#667085" }} />
            </IconButton>
          )} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;