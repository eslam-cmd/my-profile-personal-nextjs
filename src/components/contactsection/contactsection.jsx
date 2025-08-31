"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useTheme } from "@emotion/react";
export default function ContactSection({ toggleTheme, darkMode }) {
  const theme = useTheme();
  const colors = {
    buttonBg: darkMode ? "#0A1F44" : "#186e96",
    buttonText: darkMode ? "#D4AF37" : "#ffff",
    avatarBorder: "#D4AF37",
    avatarShadow: "rgba(212, 175, 55, 0.3)",
    nameColor: darkMode ? "#D4AF37" : "#007ffdff",
    glowColor: "#3f51b5",
  };
  return (
    <section id="contact" style={{ margin: "70px 0" }}>
      <Box
        sx={{
          maxWidth: "700px",
          margin: "auto",
          textAlign: "center",
          padding: "60px 20px",
          color: "#f1f5f9",
          background: "#1f212c9d",
          borderRadius: "24px",
          border: "1px solid #D4AF37",
          boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.16)",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: colors.nameColor,
            marginBottom: "30px",
            fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
          }}
        >
          Let's Build Something Exceptional Together
        </Typography>

        <Typography
          sx={{
            color: "#ddd",
            marginBottom: "24px",
            lineHeight: 1.8,
            fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.6rem" },
          }}
        >
          I'm <strong>Islam Hadaya</strong>, a freelance developer focused on
          crafting modern, responsive web experiences. Whether you're launching
          a new idea, improving a product, or exploring a unique solution — I'm
          here to make it real.
        </Typography>

        <Typography
          sx={{
            marginBottom: "16px",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.4rem" },
          }}
        >
          Ready to level up your digital presence? 🚀
        </Typography>

        <Typography
          sx={{
            marginBottom: "16px",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.4rem" },
          }}
        >
          Check out{" "}
          <Link
            href="/project"
            style={{ color: "#D4AF37", textDecoration: "none" }}
          >
            my projects
          </Link>{" "}
          to learn more about each service I offer.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "32px" }}>
          Have something in mind?{" "}
          <Link
            href="/contact"
            style={{ color: "#D4AF37", textDecoration: "none" }}
          >
            Reach out{" "}
          </Link>
          and let's turn your vision into reality.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.buttonBg,

            paddingX: 4,
            paddingY: 1.5,
            borderRadius: "25px",
          }}
        >
          <Link
            href="/contact"
            style={{
              color: colors.buttonText,
              textDecoration: "none",
            }}
          >
            Contact me ..
          </Link>
        </Button>
      </Box>
    </section>
  );
}
