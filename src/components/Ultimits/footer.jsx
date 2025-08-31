import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.59)",
        color: "white",
        display: "flex",
        justifyContent: "space-between", // توزيع العناصر
        alignItems: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      {/* نص الحقوق */}
      <Typography variant="body2">
        Designed by Islam
        <span style={{ color: "#282828", fontWeight: "800" }}>2025 ©</span>
      </Typography>

      {/* أيقونات التواصل
      <Box component="footer" sx={{ background: "#1a1b1d", color: "#fff" }}>
        <IconButton
          href="https://github.com/eslam-cmd"
          target="_blank"
          sx={{ color: "white" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton href="#" target="_blank" sx={{ color: "white" }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" target="_blank" sx={{ color: "white" }}>
          <LinkedInIcon />
        </IconButton>
      </Box> */}
    </Box>
  );
}
