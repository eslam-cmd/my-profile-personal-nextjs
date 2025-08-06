"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ContactSection() {
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
          border: "1px solid #aaa",
          boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.16)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#38bdf8",
            marginBottom: "30px",
          }}
        >
          Let's Build Something Exceptional Together
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#ddd",
            marginBottom: "24px",
            lineHeight: 1.8,
          }}
        >
          I'm <strong>Islam Hadaya</strong>, a freelance developer focused on
          crafting modern, responsive web experiences. Whether you're launching
          a new idea, improving a product, or exploring a unique solution — I'm
          here to make it real.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#aaa", marginBottom: "16px" }}
        >
          Ready to level up your digital presence? 🚀
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#aaa", marginBottom: "16px" }}
        >
          Check out{" "}
          <Link href="/projectpage" style={{ color: "#38bdf8", textDecoration: "none" }}>
            my projects
          </Link>{" "}
          to learn more about each service I offer.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#aaa", marginBottom: "32px" }}
        >
          Have something in mind?{" "}
          <Link
            href="/Contactformpage"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            Reach out {" "}
          </Link>
          and let's turn your vision into reality.
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#1976d2", paddingX: 4, paddingY: 1.5 }}
        >
          <Link
            href="/contactpage"
            style={{ color: "#ddd", textDecoration: "none" }}
          >
            Contact me ..
          </Link>
        </Button>
        
      </Box>
    </section>
  );
}
