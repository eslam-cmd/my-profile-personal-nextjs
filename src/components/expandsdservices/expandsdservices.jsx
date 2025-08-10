"use client";
import * as React from "react";
import { Card, Grid, Typography, Box, Divider } from "@mui/material";

// ✅ استيراد الأيقونات من MUI
import { MdOutlineSettings } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";

export default function ExpandSdservices() {
  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description:
        "Tailoring web solutions to meet unique business needs, leveraging cutting-edge technologies. Your vision, our expertise—let's build something extraordinary.",
      icon: <MdOutlineSettings />,
    },
    {
      id: 2,
      title: "Technical Consultation",
      description:
        "Providing expert guidance on technical strategies and best practices. Navigate complexities and make informed decisions with confidence.",
      icon: <MdLightbulbOutline />,
    },
    {
      id: 3,
      title: "Strategic Project Planning",
      description:
        "Collaborating with clients to define project requirements, milestones, and deliverables. Let's create a roadmap for success and bring your vision to life.",
      icon: <MdOutlineAnalytics />,
    },
  ];

  return (
    <section
      id="Expand Sdservices"
      style={{
        padding: "0px 20px",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#D4AF37",
          fontWeight: "700",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Expanded Services
      </Typography>

      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        Unlock a world of specialized services that distinguish my work and
        elevate your projects to new heights.
      </Typography>

      <Grid mt={10} container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                width: { xs: "100%", sm: "80%", md: "400px" },
                height: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: ".5s",
                padding: "40px",
                background: "rgba(10, 31, 68, 0.7)",
                borderRadius: "24px",
                boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.2)",
                border: "1px solid #D4AF37",
                textAlign: "center",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 8px 20px rgba(25, 118, 210, 0.3)",
                },
              }}
            >
              <Box sx={{ fontSize: "5rem", color: "#D4AF37", mb: 2 }}>
                {service.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#D4AF37", mb: 1 }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  maxWidth: "270px",
                  color: "#ccc",
                }}
              >
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ backgroundColor: "#D4AF37", marginTop: "100px" }} />
    </section>
  );
}
