// src/components/LoadingScreen.jsx
"use client";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function LoadingScreen() {
  return (
    <Backdrop
      open
      sx={{
        color: "#00ffcc",
        backgroundColor: "rgba(0,0,0,0.9)",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          padding: 4,
          borderRadius: 3,
          backgroundColor: "#121212",
          boxShadow: "0 0 10px #00ffcc",
          border: "1px solid #00ffcc",
          maxWidth: 500,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            display: "flex",
            alignItems: "center",
            color: "#00ffcc",
            marginBottom: 2,
          }}
        >
          <TerminalIcon sx={{ marginRight: 1 }} />
          terminal:~/project/src
        </Typography>

        <TypeAnimation
          sequence={[
            "Initializing components...",
            1500,
            "Compiling modules...",
            1500,
            "Optimizing UI...",
            1500,
            "Almost ready ✨",
            1500,
          ]}
          speed={50}
          style={{
            fontFamily: "monospace",
            fontSize: "1rem",
            color: "#d0d0d0",
          }}
          repeat={Infinity}
        />
      </Box>
    </Backdrop>
  );
}
