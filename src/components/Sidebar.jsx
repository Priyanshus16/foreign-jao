// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   Collapse,
// } from "@mui/material";
// import {
//   MdDashboard,
//   MdVideoLibrary,
//   MdOutlineLiveTv,
//   MdAssignment,
//   MdExpandLess,
//   MdExpandMore,
// } from "react-icons/md";
// import { BsBank } from "react-icons/bs";

// const menuItems = [
//   { label: "Dashboard", icon: <MdDashboard /> },
//   { label: "College Finder", icon: <BsBank /> },
//   { label: "Assets", icon: <MdVideoLibrary /> },
//   { label: "Courses", icon: <MdVideoLibrary /> },
//   { label: "Live Sessions", icon: <MdOutlineLiveTv /> },
//   { label: "Test & Papers", icon: <MdAssignment /> },
// ];

// const subItems = ["Overview", "Notification", "Analytics", "Reports"];

// const Sidebar = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <Box
//       sx={{
//         width: 240,
//         bgcolor: "white",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100vh",
//         boxShadow: 1,
//       }}
//     >
//       {/* Menu */}
//       <List>
//         {menuItems.map((item, index) => (
//           <React.Fragment key={index}>
//             <ListItem
//               button
//               onClick={() => handleClick(index)}
//               sx={{
//                 borderRadius: "8px",
//                 bgcolor: openIndex === index ? "#7F56D9" : "transparent",
//                 color: openIndex === index ? "white" : "#344054",
//                 "&:hover": {
//                   bgcolor: openIndex === index ? "#7F56D9" : "#F9FAFB",
//                 },
//                 mt: "10px",
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: openIndex === index ? "white" : "#344054",
//                   minWidth: "40px",
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.label}
//                 primaryTypographyProps={{
//                   fontFamily: "Urbanist, sans-serif",
//                   fontWeight: 600,
//                   fontSize: "16px",
//                   lineHeight: "24px",
//                 }}
//               />
//               {openIndex === index ? <MdExpandLess /> : <MdExpandMore />}
//             </ListItem>

//             {/* Sub Items */}
//             <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {subItems.map((sub, subIndex) => (
//                   <ListItem
//                     key={subIndex}
//                     button
//                     sx={{
//                       pl: 8,
//                       "&:hover": { bgcolor: "#F3F4F6" },
//                     }}
//                   >
//                     <ListItemText
//                       primary={sub}
//                       primaryTypographyProps={{
//                         fontFamily: "Urbanist, sans-serif",
//                         fontSize: "14px",
//                         fontWeight: 500,
//                         color: "#344054",
//                       }}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Collapse>
//           </React.Fragment>
//         ))}
//       </List>

//       {/* User Info */}
//       <Divider />
//       <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
//         <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
//         <Box sx={{ ml: 2 }}>
//           <Typography
//             sx={{
//               fontFamily: "Urbanist, sans-serif",
//               fontWeight: 600,
//               fontSize: "14px",
//               color: "#101828",
//             }}
//           >
//             Olivia Rhye
//           </Typography>
//           <Typography
//             sx={{
//               fontFamily: "Urbanist, sans-serif",
//               fontSize: "12px",
//               color: "#667085",
//             }}
//           >
//             olivia@untitledui.com
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Collapse,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
} from "@mui/material";
import {
  MdDashboard,
  MdVideoLibrary,
  MdOutlineLiveTv,
  MdAssignment,
  MdExpandLess,
  MdExpandMore,
  MdMenu,
} from "react-icons/md";
import { BsBank } from "react-icons/bs";

const menuItems = [
  { label: "Dashboard", icon: <MdDashboard /> },
  { label: "College Finder", icon: <BsBank /> },
  { label: "Assets", icon: <MdVideoLibrary /> },
  { label: "Courses", icon: <MdVideoLibrary /> },
  { label: "Live Sessions", icon: <MdOutlineLiveTv /> },
  { label: "Test & Papers", icon: <MdAssignment /> },
];

const subItems = ["Overview", "Notification", "Analytics", "Reports"];

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      {/* Menu */}
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => handleClick(index)}
              sx={{
                borderRadius: "8px",
                bgcolor: openIndex === index ? "#7F56D9" : "transparent",
                color: openIndex === index ? "white" : "#344054",
                "&:hover": {
                  bgcolor: openIndex === index ? "#7F56D9" : "#F9FAFB",
                },
                mt: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  color: openIndex === index ? "white" : "#344054",
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              />
              {openIndex === index ? <MdExpandLess /> : <MdExpandMore />}
            </ListItem>

            {/* Sub Items */}
            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subItems.map((sub, subIndex) => (
                  <ListItem
                    key={subIndex}
                    button
                    sx={{
                      pl: 8,
                      "&:hover": { bgcolor: "#F3F4F6" },
                    }}
                  >
                    <ListItemText
                      primary={sub}
                      primaryTypographyProps={{
                        fontFamily: "Urbanist, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#344054",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      {/* User Info */}
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
        <Box sx={{ ml: 2 }}>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#101828",
            }}
          >
            Olivia Rhye
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "12px",
              color: "#667085",
            }}
          >
            olivia@untitledui.com
          </Typography>
        </Box>
      </Box>
    </>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' }, position: 'fixed', top: 10, left: 10, zIndex: 1300 }}
        >
          <MdMenu />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawerContent}
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        boxShadow: 1,
        position: "sticky",
        top: 0,
      }}
    >
      {drawerContent}
    </Box>
  );
};

export default Sidebar;