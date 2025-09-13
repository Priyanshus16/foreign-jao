// import React from "react";
// import {
//   Box,
//   Typography,
//   Avatar,
//   Link,
//   Divider,
// } from "@mui/material";

// const announcements = [
//   {
//     name: "Lana Steiner",
//     time: "21 days ago",
//     title: "Posted as announcements",
//     content:
//       "This is going to be the placeholder for the announcement which will be posted by the instructor of the course. This is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the course".repeat(
//         1
//       ),
//   },
//   {
//     name: "Lana Steiner",
//     time: "21 days ago",
//     title: "Posted as announcements",
//     content:
//       "This is going to be the placeholder for the announcement which will be posted by the instructor of the course. This is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the course".repeat(
//         1
//       ),
//   },
// ];

// const Announcements = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "white",
//         p: 3,
//         borderRadius: 2,
//         boxShadow: 1,
//         mb: 4,
//       }}
//     >
//       {/* Header */}
//       <Typography variant="h6" fontWeight="bold" mb={0.5}>
//         Announcements
//       </Typography>
//       <Typography variant="body2" color="text.secondary" mb={2}>
//         View all the announcements which has been announced by the instructor
//       </Typography>

//       {announcements.map((item, index) => (
//         <Box
//           key={index}
//           sx={{
//             display: "flex",
//             gap: 2,
//             pb: 3,
//             mb: 2,
//             borderBottom: index !== announcements.length - 1 ? "1px solid #eee" : "none",
//           }}
//         >
//           {/* Avatar */}
//           <Avatar
//             src="https://randomuser.me/api/portraits/women/65.jpg"
//             alt={item.name}
//             sx={{ width: 40, height: 40 }}
//           />

//           {/* Content */}
//           <Box>
//             <Typography fontSize={15} fontWeight={600}>
//               {item.name}{" "}
//               <Typography
//                 component="span"
//                 fontSize={13}
//                 color="text.secondary"
//                 fontWeight={400}
//                 sx={{ ml: 1 }}
//               >
//                 {item.time}
//               </Typography>
//             </Typography>

//             <Link
//               href="#"
//               underline="hover"
//               sx={{
//                 display: "inline-block",
//                 fontSize: 15,
//                 fontWeight: 500,
//                 color: "#7B61FF",
//                 mt: 0.5,
//               }}
//             >
//               {item.title}
//             </Link>

//             <Typography fontSize={15} mt={1.2} color="text.primary">
//               {item.content}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Announcements;



import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Link,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const announcements = [
  {
    name: "Lana Steiner",
    time: "21 days ago",
    title: "Posted as announcements",
    content:
      "This is going to be the placeholder for the announcement which will be posted by the instructor of the course. This is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the course".repeat(
        1
      ),
  },
  {
    name: "Lana Steiner",
    time: "21 days ago",
    title: "Posted as announcements",
    content:
      "This is going to be the placeholder for the announcement which will be posted by the instructor of the course. This is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the courseThis is going to be the placeholder for the announcement which will be posted by the instructor of the course".repeat(
        1
      ),
  },
];

const Announcements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        boxShadow: 1,
        mb: 4,
      }}
    >
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" mb={0.5}>
        Announcements
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        View all the announcements which has been announced by the instructor
      </Typography>

      {announcements.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            pb: 3,
            mb: 2,
            borderBottom: index !== announcements.length - 1 ? "1px solid #eee" : "none",
          }}
        >
          {/* Avatar */}
          <Avatar
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt={item.name}
            sx={{ width: 40, height: 40, mb: isMobile ? 1 : 0 }}
          />

          {/* Content */}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ 
              display: "flex", 
              flexDirection: isMobile ? "column" : "row", 
              alignItems: isMobile ? "flex-start" : "center",
              mb: isMobile ? 0.5 : 0
            }}>
              <Typography fontSize={15} fontWeight={600}>
                {item.name}
              </Typography>
              <Typography
                component="span"
                fontSize={13}
                color="text.secondary"
                fontWeight={400}
                sx={{ ml: isMobile ? 0 : 1, mt: isMobile ? 0.5 : 0 }}
              >
                {item.time}
              </Typography>
            </Box>

            <Link
              href="#"
              underline="hover"
              sx={{
                display: "inline-block",
                fontSize: 15,
                fontWeight: 500,
                color: "#7B61FF",
                mt: 0.5,
              }}
            >
              {item.title}
            </Link>

            <Typography 
              fontSize={15} 
              mt={1.2} 
              color="text.primary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: { xs: 3, sm: "none" },
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.content}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Announcements;