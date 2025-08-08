"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
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
            <img
              src="https://www.mdar.space/_next/image?url=%2FhomeLogo.png&w=1920&q=75"
              alt="Animated coding icon"
              style={{ width: "280px", height: "280px", transition: ".5s" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              flexWrap: "wrap",
              justifyContent: "center",
              fontFamily: "'Lobster', cursive",
            }}
          >
            {"Islam Hadaya".split("").map((char, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "monospace",
                  fontSize: { xs: "1.4rem", sm: "1.6rem", md: "3rem" },
                  fontWeight: "bold",
                  animation: `glow 1.5s ease-in-out ${index * 0.1}s infinite`,
                  display: "inline-block",
                  color: "#3f51b5",
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
              variant="outlined"
              endIcon={<DownloadIcon />}
              sx={{
                paddingX: 3,
                paddingY: 1,
                borderRadius: "25px",
                fontSize: "0.9rem",
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
              }}
              onClick={() => {
                window.location.href = "#project";
              }}
            >
              <Link
                href="/projects"
                style={{ color:"#222", textDecoration: "none" }}
              >
                View Projects
              </Link>
              
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
            <Link href="mailto:hdayaaslam34@gmail.com" target="_blank">
              <EmailIcon />
            </Link>
            <Link
              href="https://www.facebook.com/islam.hadaya.2025?mibextid=ZbWKwL"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "#3f51b5" }} />
            </Link>
            <Link href="https://github.com/eslam-cmd" target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eslam-hd-60a056357"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "#6573c3" }} />
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
