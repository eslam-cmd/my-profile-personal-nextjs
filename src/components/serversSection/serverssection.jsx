"use client";
import * as React from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";

// ✅ استيراد الأيقونات
import { FaLaptopCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import {
  MdOutlineStorage,
  MdOutlineSupportAgent,
  MdRestaurantMenu,
  MdIntegrationInstructions,
} from "react-icons/md";
import { GiPencilRuler } from "react-icons/gi";

export default function ServiceSection() {
  const services = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "We craft user-friendly experiences that adapt to all devices, ensuring consistency and optimization across screens.",
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: "Creative UI/UX",
      description:
        "Visually appealing interfaces that captivate users and elevate engagement through user-centric design.",
      icon: <GiPencilRuler />,
    },
    {
      id: 3,
      title: "Cutting-Edge Technologies",
      description:
        "We use React.js, Next.js, TypeScript and more to build future-proof, high-performance applications.",
      icon: <MdIntegrationInstructions />,
    },
    {
      id: 4,
      title: "Full-Stack Capabilities",
      description:
        "End-to-end development with PrismaDB and modern stacks for seamless data management and performance.",
      icon: <MdOutlineStorage />,
    },
    {
      id: 5,
      title: "Hosting & Deployment",
      description:
        "Fast, reliable deployment strategies that ensure your site loads quickly and runs smoothly.",
      icon: <CiCloudOn />,
    },
    {
      id: 6,
      title: "Technical Support",
      description:
        "We offer ongoing support and quick issue resolution to keep your applications running flawlessly.",
      icon: <MdOutlineSupportAgent />,
    },
  ];

  return (
    <section id="services" style={{ padding: "100px 20px" }}>
     

      <Grid container spacing={4} justifyContent="center">
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
              <Box sx={{ fontSize: "4rem", color: "#D4AF37" }}>
                {service.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#D4AF37" }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#ddd",
                  maxWidth: "280px",
                  margin: "auto",
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
