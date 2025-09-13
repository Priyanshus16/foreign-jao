// import React from "react";
// import {
//   Box,
//   Typography,
//   Avatar,
//   Link,
//   Divider,
// } from "@mui/material";
// import ReplyIcon from "@mui/icons-material/Reply";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// const reviews = [
//   {
//     name: "Lana Steiner",
//     time: "7 days ago",
//     content:
//       "This is going to be the placeholder for the review given by the past students",
//     rating: 4,
//   },
//   {
//     name: "Lana Steiner",
//     time: "7 days ago",
//     content:
//       "This is going to be the placeholder for the review given by the past students",
//     rating: 4,
//   },
//   {
//     name: "Lana Steiner",
//     time: "7 days ago",
//     content:
//       "This is going to be the placeholder for the review given by the past students",
//     rating: 4,
//   },
// ];

// const renderStars = (rating) => (
//   <Box sx={{ display: "flex", alignItems: "center" }}>
//     {Array.from({ length: 5 }, (_, i) =>
//       i < rating ? (
//         <StarIcon key={i} sx={{ color: "#FFA500", fontSize: 18 }} />
//       ) : (
//         <StarBorderIcon key={i} sx={{ color: "#FFA500", fontSize: 18 }} />
//       )
//     )}
//   </Box>
// );

// const Reviews = () => {
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
//       <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
//         Reviews
//       </Typography>
//       <Typography
//         sx={{
//           fontSize: "15px",
//           color: "text.secondary",
//           mb: 2,
//         }}
//       >
//         View all the reviews which has been shared by the past students
//       </Typography>

//       <Divider sx={{ mb: 2 }} />

//       {reviews.map((r, index) => (
//         <Box
//           key={index}
//           sx={{
//             display: "flex",
//             gap: 2,
//             mb: 3,
//           }}
//         >
//           {/* Avatar */}
//           <Avatar
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             alt={r.name}
//             sx={{ width: 42, height: 42 }}
//           />

//           {/* Review content */}
//           <Box sx={{ flex: 1 }}>
//             {/* Name */}
//             <Typography fontSize={15} fontWeight={600}>
//               {r.name}
//             </Typography>

//             {/* Stars + Time in one line */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//                 mt: 0.5,
//                 mb: 0.5,
//               }}
//             >
//               {renderStars(r.rating)}
//               <Typography fontSize={14} color="text.secondary">
//                 {r.time}
//               </Typography>
//             </Box>

//             {/* Review text */}
//             <Typography fontSize={15} mb={0.5}>
//               {r.content}
//             </Typography>

//             {/* Read more */}
//             <Link
//               href="#"
//               underline="hover"
//               sx={{ fontSize: 15, fontWeight: 500, color: "#7B61FF" }}
//             >
//               Read More
//             </Link>

//             {/* Reply icon */}
//             <Box sx={{ mt: 0.8 }}>
//               <ReplyIcon sx={{ fontSize: 18, color: "text.secondary" }} />
//             </Box>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Reviews;


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
import ReplyIcon from "@mui/icons-material/Reply";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const reviews = [
  {
    name: "Lana Steiner",
    time: "7 days ago",
    content:
      "This is going to be the placeholder for the review given by the past students",
    rating: 4,
  },
  {
    name: "Lana Steiner",
    time: "7 days ago",
    content:
      "This is going to be the placeholder for the review given by the past students",
    rating: 4,
  },
  {
    name: "Lana Steiner",
    time: "7 days ago",
    content:
      "This is going to be the placeholder for the review given by the past students",
    rating: 4,
  },
];

const renderStars = (rating) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    {Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <StarIcon key={i} sx={{ color: "#FFA500", fontSize: 18 }} />
      ) : (
        <StarBorderIcon key={i} sx={{ color: "#FFA500", fontSize: 18 }} />
      )
    )}
  </Box>
);

const Reviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        Reviews
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          color: "text.secondary",
          mb: 2,
        }}
      >
        View all the reviews which has been shared by the past students
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {reviews.map((r, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            mb: 3,
          }}
        >
          {/* Avatar */}
          <Avatar
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt={r.name}
            sx={{ width: 42, height: 42 }}
          />

          {/* Review content */}
          <Box sx={{ flex: 1 }}>
            {/* Name */}
            <Typography fontSize={15} fontWeight={600}>
              {r.name}
            </Typography>

            {/* Stars + Time in one line */}
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                gap: 1,
                mt: 0.5,
                mb: 0.5,
              }}
            >
              {renderStars(r.rating)}
              <Typography fontSize={14} color="text.secondary">
                {r.time}
              </Typography>
            </Box>

            {/* Review text */}
            <Typography fontSize={15} mb={0.5}>
              {r.content}
            </Typography>

            {/* Read more */}
            <Link
              href="#"
              underline="hover"
              sx={{ fontSize: 15, fontWeight: 500, color: "#7B61FF" }}
            >
              Read More
            </Link>

            {/* Reply icon */}
            <Box sx={{ mt: 0.8 }}>
              <ReplyIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;