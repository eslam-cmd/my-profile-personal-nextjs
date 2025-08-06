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
        "Tailoring web solutions to meet unique business needs, leveraging cutting-edge technologies. Our custom web development services are designed to bring your unique vision to life. With expertise in the latest technologies, we build tailored solutions that set your business apart. Your vision, our expertise—let's build something extraordinary.",
      icon: <MdOutlineSettings />,
    },
    {
      id: 2,
      title: "Technical Consultation",
      description:
        "Providing expert guidance on technical strategies and best practices, assisting you in making informed decisions. Let us be your compass in the ever-evolving tech landscape. Our technical consultation services are aimed at helping you navigate complexities, make informed decisions, and chart a course for success.",
      icon: <MdLightbulbOutline />,
    },
    {
      id: 3,
      title: "Strategic Project Planning",
      description:
        "Collaborating with clients to define project requirements, milestones, and deliverables. Let's create a roadmap for success and bring your vision to life. Our strategic project planning services involve close collaboration with clients to define clear project goals, milestones, and deliverables, ensuring a roadmap for successful execution.",
      icon: <MdOutlineAnalytics />,
    },
  ];

  return (
    <section id="Expand Sdservices">
      <Typography
        variant="h3"
        className="tools-skils"
        gutterBottom
        sx={{ textAlign: "center", color: "#5c6bc0", marginTop: "50px" }}
      >
        Expanded Services
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: "center"}}
      >
        Unlock a world of specialized services that distinguish my work and
        elevate your projects to new heights
      </Typography>
      <Grid mt={"100px"} container spacing={4} justifyContent="center">
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
                background: "#28307248",
                borderRadius: "24px",
                boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.16)",
                border: "1px solid #1976d2",
                textAlign: "center",
              }}
            >
              <Box sx={{ fontSize: "5rem", color: "#1976d2" }}>
                {service.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1976d2", mb: 1 }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  maxWidth: "270px",
                }}
              >
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ backgroundColor: "#ddd", marginTop: "100px" }} />
    </section>
  );
}
