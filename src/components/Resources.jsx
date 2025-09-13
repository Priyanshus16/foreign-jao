// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Card,
//   CardContent,
// } from "@mui/material";
// import DescriptionIcon from "@mui/icons-material/Description";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

// const resources = [
//   { title: "Weekly Assignment_01", size: "200 KB – 100% uploaded" },
//   { title: "Weekly Assignment_02", size: "200 KB – 100% uploaded" },
//   { title: "Weekly Assignment_03", size: "200 KB – 100% uploaded" },
//   { title: "Weekly Assignment_04", size: "200 KB – 100% uploaded" },
// ];

// const Resources = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "white",
//         p: 3,
//         borderRadius: 2,
//         boxShadow: 1,
//         mb: 3,
//       }}
//     >
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 1,
//         }}
//       >
//         <Box>
//           <Typography variant="h6" fontWeight="bold">
//             Resources
//           </Typography>
//           <Typography variant="body2" fontSize={"16px"} color="text.secondary">
//             View all the resources associated with course
//           </Typography>
//         </Box>

//         <Button
//           variant="outlined"
//           startIcon={<CloudDownloadOutlinedIcon />}
//           sx={{
//             borderRadius: "10px",
//             textTransform: "none",
//             fontWeight: 500,
//             px: 2,
//           }}
//         >
//           Download All
//         </Button>
//       </Box>

//       {/* Resources Grid */}
//       <Grid container spacing={2} mt={1}>
//         {resources.map((item, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 border: "1px solid #d1b3ff",

//                 borderRadius: "12px",
//                 px: 2,
//                 py: 1.5,
//                 gap: 2,
//                 color: "#7B61FF",
//               }}
//             >
//               <DescriptionIcon sx={{ fontSize: 28 }} />
//               <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                   variant="body1"
//                   fontWeight={500}
//                   sx={{ color: "text.primary", fontSize: "18px" }}
//                 >
//                   {item.title}
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary" sx={{fontSize: "15px"}}>
//                   {item.size}
//                 </Typography>
//               </Box>
//               <CheckCircleIcon sx={{ color: "#7B61FF" }} />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Resources;


import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

const resources = [
  { title: "Weekly Assignment_01", size: "200 KB – 100% uploaded" },
  { title: "Weekly Assignment_02", size: "200 KB – 100% uploaded" },
  { title: "Weekly Assignment_03", size: "200 KB – 100% uploaded" },
  { title: "Weekly Assignment_04", size: "200 KB – 100% uploaded" },
];

const Resources = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        boxShadow: 1,
        mb: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          mb: 1,
          gap: isMobile ? 2 : 0,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Resources
          </Typography>
          <Typography variant="body2" fontSize={"16px"} color="text.secondary">
            View all the resources associated with course
          </Typography>
        </Box>

        <Button
          variant="outlined"
          startIcon={<CloudDownloadOutlinedIcon />}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            width: isMobile ? "100%" : "auto",
          }}
        >
          Download All
        </Button>
      </Box>

      {/* Resources Grid */}
      <Grid container spacing={2} mt={1}>
        {resources.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #d1b3ff",
                borderRadius: "12px",
                px: 2,
                py: 1.5,
                gap: 2,
                color: "#7B61FF",
              }}
            >
              <DescriptionIcon sx={{ fontSize: 28 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  sx={{ color: "text.primary", fontSize: "18px" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{fontSize: "15px"}}>
                  {item.size}
                </Typography>
              </Box>
              <CheckCircleIcon sx={{ color: "#7B61FF" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resources;