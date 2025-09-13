// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Avatar,
//   MenuItem,
//   Select,
//   Link,
// } from "@mui/material";

// const questions = [
//   {
//     name: "Lana Steiner",
//     time: "7 days ago",
//     text: "This is going to be the placeholder for the question which will be asked by student in Q&A section",
//   },
//   {
//     name: "Lana Steiner",
//     time: "7 days ago",
//     text: "This is going to be the placeholder for the question which will be asked by student in Q&A section",
//   },
//   {
//     name: "Lana Steiner",
//     time: "7 days ago",
//     text: "This is going to be the placeholder for the question which will be asked by student in Q&A section",
//   },
// ];

// function QandA() {
//   return (
//     <Card>
//       <CardContent>
//         <Grid container justifyContent="space-between" alignItems="center">
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             sx={{ fontSize: "20px" }}
//           >
//             Q&A
//           </Typography>
//           <Select
//             defaultValue="7days"
//             size="small"
//             sx={{ borderRadius: "20px", fontSize: "15px" }}
//           >
//             <MenuItem value="7days" sx={{ fontSize: "15px" }}>
//               Last 7 Days
//             </MenuItem>
//             <MenuItem value="30days" sx={{ fontSize: "15px" }}>
//               Last 30 Days
//             </MenuItem>
//           </Select>
//         </Grid>

//         <Typography
//           variant="body2"
//           color="text.secondary"
//           mb={2}
//           sx={{ fontSize: "15px" }}
//         >
//           View & learn through the questions which has been asked by another
//           students
//         </Typography>

//         {questions.map((q, index) => (
//           <Grid
//             container
//             key={index}
//             spacing={2}
//             alignItems="flex-start"
//             sx={{ mb: 2 }}
//           >
//             <Grid item>
//               <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" />
//             </Grid>
//             <Grid item xs>
//               <Typography variant="subtitle2" sx={{ fontSize: "15px" }}>
//                 {q.name}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 color="text.secondary"
//                 sx={{ fontSize: "15px" }}
//               >
//                 {q.time}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{ mt: 1, fontSize: "15px" }}
//               >
//                 {q.text}
//               </Typography>
//               <Link
//                 href="#"
//                 underline="hover"
//                 sx={{ fontSize: "15px" }}
//               >
//                 Read More
//               </Link>
//             </Grid>
//           </Grid>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }

// export default QandA;


import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  MenuItem,
  Select,
  Link,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";

const questions = [
  {
    name: "Lana Steiner",
    time: "7 days ago",
    text: "This is going to be the placeholder for the question which will be asked by student in Q&A section",
  },
  {
    name: "Lana Steiner",
    time: "7 days ago",
    text: "This is going to be the placeholder for the question which will be asked by student in Q&A section",
  },
  {
    name: "Lana Steiner",
    time: "7 days ago",
    text: "This is going to be the placeholder for the question which will be asked by student in Q&A section",
  },
];

function QandA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: "20px" }}
            >
              Q&A
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: isMobile ? 'left' : 'right' }}>
            <Select
              defaultValue="7days"
              size="small"
              sx={{ borderRadius: "20px", fontSize: "15px", width: isMobile ? '100%' : 'auto' }}
            >
              <MenuItem value="7days" sx={{ fontSize: "15px" }}>
                Last 7 Days
              </MenuItem>
              <MenuItem value="30days" sx={{ fontSize: "15px" }}>
                Last 30 Days
              </MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{ fontSize: "15px", mt: 1 }}
        >
          View & learn through the questions which has been asked by another
          students
        </Typography>

        {questions.map((q, index) => (
          <Grid
            container
            key={index}
            spacing={2}
            alignItems="flex-start"
            sx={{ mb: 2 }}
          >
            <Grid item>
              <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" />
            </Grid>
            <Grid item xs={12} sm>
              <Box sx={{ 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                mb: 0.5
              }}>
                <Typography variant="subtitle2" sx={{ fontSize: "15px", mr: 1 }}>
                  {q.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "15px" }}
                >
                  {q.time}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 1, fontSize: "15px" }}
              >
                {q.text}
              </Typography>
              <Link
                href="#"
                underline="hover"
                sx={{ fontSize: "15px", display: "block", mt: 0.5 }}
              >
                Read More
              </Link>
            </Grid>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
}

export default QandA;