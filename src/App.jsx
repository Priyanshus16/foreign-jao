import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import VideoSection from "./components/VideoSection.jsx";
import Resources from "./components/Resources";
import QandA from "./components/QandA";
import Announcements from "./components/Announcements";
import Reviews from "./components/Reviews";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <Header />

      <Box sx={{ display: "flex", bgcolor: "grey.50" }}>

        <Sidebar />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          
          <VideoSection />

          <Box sx={{ p: 2 }}>
            <Resources/>
            <QandA />
            <Announcements />
            <Reviews />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
