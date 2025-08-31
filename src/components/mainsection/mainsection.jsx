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
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

export default function MainSection({ toggleTheme, darkMode }) {
  const theme = useTheme();
  const colors = {
    buttonBg: darkMode ? "#0A1F44" : "#186e96",
    buttonText: darkMode ? "#D4AF37" : "#ffff",
    avatarBorder: darkMode ? "#D4AF37" : "#186e96",
    avatarShadow: darkMode
      ? "0 6px 58px rgba(212, 175, 55, 0.3)"
      : "rgba(14, 124, 175, 1)",
    nameColor:darkMode ? "#D4AF37" : "#186e96",
    glowColor: "#3f51b5",
  };

  // تعريف أنيميشن للموجات الصوتية
  const pulse = keyframes`
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.4;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  `;

  const wave = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(5deg);
    }
    30% {
      transform: rotate(-5deg);
    }
    40% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `;

  const musicBars = keyframes`
    0% {
      height: 5px;
    }
    25% {
      height: 25px;
    }
    50% {
      height: 15px;
    }
    75% {
      height: 30px;
    }
    100% {
      height: 5px;
    }
  `;

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
          {/* موجات صوتية متحركة حول الصورة */}
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* الموجات الخارجية */}
            <Box
              sx={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "-20px",
                bottom: "-20px",
                borderRadius: "50%",
                border: `2px solid ${darkMode ? "#D4AF37" : "#186e96"}`,
                opacity: 0.6,
                animation: `${pulse} 3s infinite ease-in-out`,
              }}
            />
             <Box
              sx={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                right: "-10px",
                bottom: "-10px",
                borderRadius: "50%",
                border: `1px solid ${darkMode ? "#D4AF37" : "#186e96"}`,
                opacity: 0.6,
                animation: `${pulse} 3s infinite ease-in-out`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                right: "-5px",
                bottom: "-5px",
                borderRadius: "50%",
                border: `.5px solid ${darkMode ? "#D4AF37" : "#186e96"}`,
                opacity: 0.6,
                animation: `${pulse} 3s infinite ease-in-out`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "-30px",
                left: "-30px",
                right: "-30px",
                bottom: "-30px",
                borderRadius: "50%",
                border: `.3px solid ${darkMode ? "#D4AF37" : "#186e96"}`,
                opacity: 0.4,
                animation: `${pulse} 4s infinite ease-in-out`,
                animationDelay: "0.5s",
              }}
            />
            
            {/* قضبان موسيقى متحركة */}
            {[...Array(8)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  width: "4px",
                  background: darkMode ? 
                    `linear-gradient(to top, #D4AF37, #FFD700, #D4AF37)` : 
                   ` linear-gradient(to top, #186e96, #2a9df4, #186e96)`,
                  borderRadius: "2px",
                  bottom: "50%",
                  left: "50%",
                  transformOrigin: "bottom center",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  height: "15px",
                  animation: `${musicBars} 1.5s infinite ease-in-out`,
                  animationDelay: `${i * 0.2}s`,
                  zIndex: -1,
                }}
              />
            ))}
            
            <Avatar
              alt="Islam Hadaya"
              src="/logo/my-photo.jpg"
              sx={{
                width: 230,
                height: 230,
                boxShadow: colors.avatarShadow,
                border: "2px solid ",
                borderColor: colors.avatarBorder,
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(204, 166, 42, 0.37)",
                },
                position: "relative",
                zIndex: 2,
              }}
            />
            
            {/* نقاط موسيقية متحركة */}
            {[...Array(6)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: darkMode ? "#D4AF37" : "#186e96",
                  top: `${30 + (i * 15)}%`,
                  left: `${i % 2 === 0 ? "20%" : "80%"}`,
                  opacity: 0.7,
                  animation: `${pulse} 2s infinite ease-in-out`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
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
                  color: colors.nameColor,
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
                fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              endIcon={<AppsIcon sx={{ color: colors.buttonText }} />}
              sx={{
                paddingX: 3,
                paddingY: 1,
                borderRadius: "25px",
                fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                backgroundColor: colors.buttonBg,
                textTransform: "none",
              }}
            >
              <Link
                href="/project"
                style={{
                  textDecoration: "none",
                  color: colors.buttonText,
                  display: "inline-block",
                }}
              >
                VIEW PROJECTS
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