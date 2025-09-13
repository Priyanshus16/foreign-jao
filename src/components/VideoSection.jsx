// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton
// } from "@mui/material";
// import { FaDownload } from "react-icons/fa";
// import { FaStar, FaMapMarkerAlt, FaUserGraduate, FaChalkboardTeacher, FaClock, FaBullseye } from "react-icons/fa";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import DescriptionIcon from "@mui/icons-material/Description";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import { MdArrowBack } from "react-icons/md";
// import uslogo from "../assets/US.png"; 


// const courseItems = [
//   { title: "Class 01", duration: "35 mins", icon: <PlayCircleOutlineIcon />, status: "completed" },
//   { title: "Class 02", duration: "35 mins", icon: <PlayCircleOutlineIcon />, status: "completed" },
//   { title: "Help Guides", duration: "35 mins", icon: <DescriptionIcon />, status: "completed" },
//   { title: "Class 03", duration: "50 mins", icon: <PlayCircleOutlineIcon />, status: "current" },
//   { title: "Class 04", duration: "35 mins", icon: <PlayCircleOutlineIcon />, status: "locked" },
//   { title: "Short Test", duration: "35 mins", icon: <AccessTimeIcon />, status: "locked" },
// ];

// const VideoSection = () => {
//   return (
//     <Box sx={{ display: "flex", p: 2, gap: 2 }}>
//       {/* Left Section */}
//       <Box
//         sx={{
//           flex: 3,
//           display: "flex",
//           flexDirection: "column",
//           bgcolor: "white",
//           borderRadius: 2,
//           boxShadow: 1,
//           overflow: "hidden",
//           p: 2,
//         }}
//       >
//         {/* Header */}
//         <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         mb: 2,
//         flexShrink: 0,
//       }}
//     >
//       <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//         <IconButton
//           sx={{
//             border: "1px solid #ccc",
//             p: 0.5,
//             mr: 1,
//             fontSize: "20px",
//           }}
//           aria-label="Back"
//           onClick={() => {
//             // Your back/close logic here
//           }}
//         >
//           <MdArrowBack />
//         </IconButton>

//         <Box>
//           <Typography variant="h5" fontWeight={550}>
//             Machine Learning - Master’s Course
//           </Typography>
//           <Typography variant="body2" fontSize={"16px"} color="text.secondary">
//             <Box
//               component="img"
//               src={uslogo}
//               alt="US Flag"
//               sx={{
//                 height: 16,
//                 width: 18,
//                 verticalAlign: "middle",
//                 mr: 0.5,
//                 borderRadius: "2px",
//                 display: "inline-block",
//               }}
//             />
//             By Professor Aristor, Stanford University
//           </Typography>
//         </Box>
//       </Box>

//       <Button
//         variant="contained"
//         color="secondary"
//         startIcon={<FaDownload />}
//         sx={{ borderRadius: 2, backgroundColor: "#7F56D9" }}
//       >
//         Download Resource
//       </Button>
//     </Box>

//         {/* Video */}
//         <Box
//           component="video"
//           controls
//           src="/your-video.mp4"
//           sx={{
//             width: "100%",
//             flexShrink: 0,
//             aspectRatio: "16/9",
//             borderRadius: 2,
//             backgroundColor: "#f0f0f0",
//             mb: 2,
//           }}
//         />

//         {/* Overview & Details Section */}
//         <Box sx={{ display: "flex", gap: 2, flex: 1, minHeight: "100px" }}>
//           {/* Sidebar Tabs */}
//           <Box
//             sx={{
//               minWidth: 160,
//               bgcolor: "white",
//               borderRadius: 2,
//               boxShadow: 1,
//               p: 2,
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//               flexShrink: 0,
//             }}
//           >
//             {["Overview", "Q&A", "Notes", "Announcements", "Reviews", "Resources"].map(
//               (label, index) => (
//                 <Typography
//                   key={index}
//                   variant="body2"
//                   fontWeight={label === "Overview" ? 600 : 400}
//                   color={label === "Overview" ? "secondary.main" : "text.secondary"}
//                   sx={{
//                     cursor: "pointer",
//                     fontSize: "16px",
//                     borderLeft:
//                       label === "Overview" ? "3px solid #7B61FF" : "3px solid transparent",
//                     pl: 1,
//                   }}
//                 >
//                   {label}
//                 </Typography>
//               )
//             )}
//           </Box>

//           {/* Course Detail Info Box */}
//           <Box
//             sx={{
//               flex: 1,
//               bgcolor: "white",
//               borderRadius: 2,
//               boxShadow: 1,
//               p: 2,
//             }}
//           >
//             <Typography variant="subtitle1" sx={{ fontSize: "20px" }} fontWeight={600} mb={1}>
//               Deep learning language modal - Machine Learning Course
//             </Typography>
//             <Typography variant="body2" sx={{ fontSize: "16px" }} color="text.secondary" mb={2}>
//               View all the basic details regarding the ongoing course
//             </Typography>

//             {/* Icons + Info Grid */}
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                 gap: 2,
//               }}
//             >
//               <InfoItem icon={<FaStar color="#FBBF24" />} label="Ratings" value="4.5/5" />
//               <InfoItem icon={<FaUserGraduate color="#7B61FF" />} label="Enrolled Students" value="14,500" />
//               <InfoItem icon={<FaClock color="#7B61FF" />} label="Course Duration" value="6 Months" />
//               <InfoItem icon={<FaMapMarkerAlt color="#7B61FF" />} label="Location" value="Stanford University, New Jersey" />
//               <InfoItem icon={<FaChalkboardTeacher color="#7B61FF" />} label="Instructor" value="Dr. Jarwais Mathew" />
//               <InfoItem icon={<FaBullseye color="#7B61FF" />} label="ACT Range" value="34–36" />
//             </Box>
//           </Box>
//         </Box>
//       </Box>


//       {/* Right Section - Course Content */}
//       <Box
//         sx={{
//           flex: 1,
//           bgcolor: "white",
//           p: 2,
//           borderRadius: 2,
//           boxShadow: 1,
//           minWidth: "250px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           mb={2}
//           sx={{ fontSize: "16px" }} // same as before
//         >
//           Course Content
//         </Typography>

//         <List sx={{ flex: 1 }}>
//           {courseItems.map((item, index) => {
//             const isCurrent = item.status === "current";
//             const isCompleted = item.status === "completed";
//             const isLocked = item.status === "locked";

//             return (
//               <ListItem
//                 key={index}
//                 disableGutters
//                 sx={{
//                   px: 1,
//                   mb: 1,
//                   borderLeft: isCurrent ? "4px solid #7F56D9" : "4px solid transparent",
//                   bgcolor: isCurrent ? "rgba(127, 86, 217, 0.08)" : "transparent",
//                   borderRadius: 1,
//                   cursor: isLocked ? "not-allowed" : "pointer",
//                   opacity: isLocked ? 0.5 : 1,
//                   transition: "0.3s",
//                   "&:hover": {
//                     bgcolor: isLocked ? "transparent" : "rgba(127, 86, 217, 0.08)",
//                   },
//                 }}
//               >
//                 <ListItemIcon sx={{ minWidth: 32 }}>
//                   {isCompleted ? (
//                     <CheckCircleIcon sx={{ color: "#7F56D9", fontSize: 18 }} />
//                   ) : isCurrent ? (
//                     <RadioButtonUncheckedIcon sx={{ color: "#7F56D9", fontSize: 18 }} />
//                   ) : (
//                     <RadioButtonUncheckedIcon sx={{ color: "#9CA3AF", fontSize: 18 }} />
//                   )}
//                 </ListItemIcon>

//                 <ListItemText
//                   primary={
//                     <Typography
//                       variant="body1"
//                       fontWeight={isCurrent ? 600 : 400}
//                       sx={{
//                         color: isCurrent
//                           ? "#7F56D9"
//                           : isLocked
//                             ? "#9CA3AF"
//                             : "#111827",
//                         fontSize: "16px", // unchanged
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                   }
//                   secondary={
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
//                       {React.cloneElement(item.icon, {
//                         style: {
//                           fontSize: "16px", // unchanged
//                           color: isLocked ? "#9CA3AF" : "#7F56D9",
//                         },
//                       })}
//                       <Typography
//                         variant="caption"
//                         sx={{ color: isLocked ? "#9CA3AF" : "#6B7280", fontSize: "16px" }}
//                       >
//                         {item.duration}
//                       </Typography>
//                     </Box>
//                   }
//                 />
//               </ListItem>
//             );
//           })}
//         </List>
//       </Box>

//     </Box>
//   );
// };

// // Reusable InfoItem component
// const InfoItem = ({ icon, label, value }) => (
//   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//     <Box sx={{ fontSize: 20 }}>{icon}</Box>
//     <Box>
//       <Typography sx={{ fontSize: "16px" }} variant="caption" color="text.secondary">
//         {label}
//       </Typography>
//       <Typography sx={{ fontSize: "16px" }} variant="body2" fontWeight={500}>
//         {value}
//       </Typography>
//     </Box>
//   </Box>
// );


// export default VideoSection;


import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { FaStar, FaMapMarkerAlt, FaUserGraduate, FaChalkboardTeacher, FaClock, FaBullseye } from "react-icons/fa";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MdArrowBack } from "react-icons/md";
import uslogo from "../assets/US.png"; 


const courseItems = [
  { title: "Class 01", duration: "35 mins", icon: <PlayCircleOutlineIcon />, status: "completed" },
  { title: "Class 02", duration: "35 mins", icon: <PlayCircleOutlineIcon />, status: "completed" },
  { title: "Help Guides", duration: "35 mins", icon: <DescriptionIcon />, status: "completed" },
  { title: "Class 03", duration: "50 mins", icon: <PlayCircleOutlineIcon />, status: "current" },
  { title: "Class 04", duration: "35 mins", icon: <PlayCircleOutlineIcon />, status: "locked" },
  { title: "Short Test", duration: "35 mins", icon: <AccessTimeIcon />, status: "locked" },
];

const VideoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  
  return (
    <Box sx={{ 
      display: "flex", 
      p: { xs: 1, sm: 2 }, 
      gap: 2,
      flexDirection: isMobile ? "column" : "row"
    }}>
      {/* Left Section */}
      <Box
        sx={{
          flex: isMobile ? "none" : 3,
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 1,
          overflow: "hidden",
          p: { xs: 1, sm: 2 },
          width: "100%",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            mb: 2,
            gap: isMobile ? 2 : 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{
                border: "1px solid #ccc",
                p: 0.5,
                mr: 1,
                fontSize: "20px",
              }}
              aria-label="Back"
            >
              <MdArrowBack />
            </IconButton>

            <Box>
              <Typography variant="h5" fontWeight={550} fontSize={{ xs: "18px", sm: "24px" }}>
                Machine Learning - Master's Course
              </Typography>
              <Typography variant="body2" fontSize={{ xs: "14px", sm: "16px" }} color="text.secondary">
                <Box
                  component="img"
                  src={uslogo}
                  alt="US Flag"
                  sx={{
                    height: 16,
                    width: 18,
                    verticalAlign: "middle",
                    mr: 0.5,
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                />
                By Professor Aristor, Stanford University
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<FaDownload />}
            sx={{ 
              borderRadius: 2, 
              backgroundColor: "#7F56D9",
              width: isMobile ? "100%" : "auto"
            }}
          >
            Download Resource
          </Button>
        </Box>

        {/* Video */}
        <Box
          component="video"
          controls
          src="/your-video.mp4"
          sx={{
            width: "100%",
            flexShrink: 0,
            aspectRatio: "16/9",
            borderRadius: 2,
            backgroundColor: "#f0f0f0",
            mb: 2,
          }}
        />

        {/* Overview & Details Section */}
        <Box
          sx={{ 
            display: "flex", 
            gap: 2, 
            flex: 1, 
            minHeight: "100px",
            flexDirection: isMobile ? "column" : isTablet ? "column" : "row"
          }}
        >
          {/* Sidebar Tabs */}
          <Box
            sx={{
              minWidth: isTablet || isMobile ? "100%" : 160,
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 1,
              p: 2,
              display: "flex",
              flexDirection: isTablet || isMobile ? "row" : "column",
              gap: 2,
              flexShrink: 0,
              flexWrap: isTablet || isMobile ? "wrap" : "nowrap",
              overflowX: isTablet || isMobile ? "auto" : "visible",
            }}
          >
            {["Overview", "Q&A", "Notes", "Announcements", "Reviews", "Resources"].map(
              (label, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  fontWeight={label === "Overview" ? 600 : 400}
                  color={label === "Overview" ? "secondary.main" : "text.secondary"}
                  sx={{
                    cursor: "pointer",
                    fontSize: "16px",
                    borderLeft: isTablet || isMobile ? "none" : 
                      label === "Overview" ? "3px solid #7B61FF" : "3px solid transparent",
                    borderBottom: isTablet || isMobile ? 
                      (label === "Overview" ? "3px solid #7B61FF" : "3px solid transparent") : "none",
                    pl: isTablet || isMobile ? 0 : 1,
                    pb: isTablet || isMobile ? 0.5 : 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </Typography>
              )
            )}
          </Box>

          {/* Course Detail Info Box */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 1,
              p: 2,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: "20px" }} fontWeight={600} mb={1}>
              Deep learning language modal - Machine Learning Course
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "16px" }} color="text.secondary" mb={2}>
              View all the basic details regarding the ongoing course
            </Typography>

            {/* Icons + Info Grid - This is the missing content */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
              }}
            >
              <InfoItem icon={<FaStar color="#FBBF24" />} label="Ratings" value="4.5/5" />
              <InfoItem icon={<FaUserGraduate color="#7B61FF" />} label="Enrolled Students" value="14,500" />
              <InfoItem icon={<FaClock color="#7B61FF" />} label="Course Duration" value="6 Months" />
              <InfoItem icon={<FaMapMarkerAlt color="#7B61FF" />} label="Location" value="Stanford University, New Jersey" />
              <InfoItem icon={<FaChalkboardTeacher color="#7B61FF" />} label="Instructor" value="Dr. Jarwais Mathew" />
              <InfoItem icon={<FaBullseye color="#7B61FF" />} label="ACT Range" value="34–36" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Section - Course Content */}
      <Box
        sx={{
          flex: isMobile ? "none" : 1,
          bgcolor: "white",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          mb={2}
          sx={{ fontSize: "16px" }}
        >
          Course Content
        </Typography>

        <List sx={{ flex: 1 }}>
          {courseItems.map((item, index) => {
            const isCurrent = item.status === "current";
            const isCompleted = item.status === "completed";
            const isLocked = item.status === "locked";

            return (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  px: 1,
                  mb: 1,
                  borderLeft: isCurrent ? "4px solid #7F56D9" : "4px solid transparent",
                  bgcolor: isCurrent ? "rgba(127, 86, 217, 0.08)" : "transparent",
                  borderRadius: 1,
                  cursor: isLocked ? "not-allowed" : "pointer",
                  opacity: isLocked ? 0.5 : 1,
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: isLocked ? "transparent" : "rgba(127, 86, 217, 0.08)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {isCompleted ? (
                    <CheckCircleIcon sx={{ color: "#7F56D9", fontSize: 18 }} />
                  ) : isCurrent ? (
                    <RadioButtonUncheckedIcon sx={{ color: "#7F56D9", fontSize: 18 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ color: "#9CA3AF", fontSize: 18 }} />
                  )}
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      fontWeight={isCurrent ? 600 : 400}
                      sx={{
                        color: isCurrent
                          ? "#7F56D9"
                          : isLocked
                            ? "#9CA3AF"
                            : "#111827",
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                      {React.cloneElement(item.icon, {
                        style: {
                          fontSize: "16px",
                          color: isLocked ? "#9CA3AF" : "#7F56D9",
                        },
                      })}
                      <Typography
                        variant="caption"
                        sx={{ color: isLocked ? "#9CA3AF" : "#6B7280", fontSize: "16px" }}
                      >
                        {item.duration}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

// Reusable InfoItem component
const InfoItem = ({ icon, label, value }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box sx={{ fontSize: 20 }}>{icon}</Box>
    <Box>
      <Typography sx={{ fontSize: "16px" }} variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography sx={{ fontSize: "16px" }} variant="body2" fontWeight={500}>
        {value}
      </Typography>
    </Box>
  </Box>
);

export default VideoSection;
