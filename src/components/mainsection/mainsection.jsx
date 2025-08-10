"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TypeAnimation } from "react-type-animation";
import AppsIcon from "@mui/icons-material/Apps";

export default function MainSection() {
  return (
    <>
      <section id="home">
        <Box
          sx={{
            marginTop: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: { xs: "20px", sm: "30px", md: "30px" },
            height: "20vh",
          }}
        >
          <Box>
            <Avatar
              alt="Islam Hadaya"
              src="/logo/my-photo.jpg"
              sx={{
                width: 230,
                height: 230,
                boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
           
                border: "2px solid #D4AF37",
                "&:hover": {
                 boxShadow: "0 4px 12px rgba(204, 166, 42, 0.37)",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {"Islam  Hadaya".split("").map((char, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "monospace",
                  fontSize: { xs: "1.4rem", sm: "1.6rem", md: "3rem" },
                  fontWeight: "bold",
                  animation: `glow 1.5s ease-in-out ${index * 0.1}s infinite`,
                  display: "inline-block",
                  color: "#D4AF37",
                }}
              >
                {char}
              </Typography>
            ))}
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              maxWidth: "700px",
              lineHeight: "1.6",
              fontWeight: "bold",
              marginTop: 2,
            }}
          >
            <TypeAnimation
              sequence={[
                "Empowering your brand with powerful web solutions.",
                2000,
                "Building better web experiences, one project at a time.",
                2000,
                "Code that transforms ideas into reality.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </Typography>

          <Box sx={{ display: "flex", gap: 3, marginTop: 4 }}>
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              sx={{
                paddingX: 3,
                paddingY: 1,
                borderRadius: "25px",
                fontSize: "0.9rem",
                background: " #0A1F44",
                color: "#D4AF37",
              }}
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              endIcon={<AppsIcon />}
              sx={{
                paddingX: 3,
                paddingY: 1,
                borderRadius: "25px",
                fontSize: "0.9rem",
                background: "#0A1F44",
                color: "#D4AF37",
              }}
              onClick={() => {
                window.location.href = "#project";
              }}
            >
              <Link href="/project" style={{ textDecoration: "none" }}>
                View Projects
              </Link>
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
            <Link href="mailto:hdayaaslam34@gmail.com" target="_blank">
              <EmailIcon sx={{ color: "#D4AF37" }} />
            </Link>
            <Link
              href="https://www.facebook.com/islam.hadaya.2025?mibextid=ZbWKwL"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "#1877F2" }} />
            </Link>
            <Link href="https://github.com/eslam-cmd" target="_blank">
              <GitHubIcon sx={{ color: "#EAEAEA" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/Islam-hadaya"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "#0A66C2" }} />
            </Link>
          </Box>

          <style>
            {`
        @keyframes glow {
          0% { text-shadow: 0 0 0px #3f51b5; opacity: 0.4; }
          50% { text-shadow: 0 0 8px #3f51b5; opacity: 1; }
          100% { text-shadow: 0 0 0px #3f51b5; opacity: 0.4; }
        }
      `}
          </style>
        </Box>
      </section>
    </>
  );
}
