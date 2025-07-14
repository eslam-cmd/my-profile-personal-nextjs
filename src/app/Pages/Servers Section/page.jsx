"use client";
import * as React from "react";
import { Card, Grid, Typography, Box, Divider } from "@mui/material";

// ✅ استيراد الأيقونات من MUI
import { FaLaptopCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineStorage } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdIntegrationInstructions } from "react-icons/md";
import { GiPencilRuler } from "react-icons/gi";
export default function ServiceSection() {
  const services = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "Our team specializes in crafting user-friendly experiences that seamlessly adapt to various devices. From desktops to tablets and mobile devices, we ensure your audience enjoys a consistent and optimized user experience.",
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: "Creative UI/UX",
      description:
        "Collaborative design is at the core of our process, resulting in visually appealing interfaces that captivate your audience. Our user-centric designs elevate engagement and satisfaction, creating a lasting impression.",
      icon: <GiPencilRuler />,
    },
    {
      id: 3,
      title: "Cutting-Edge Technologies",
      description:
        "With expertise in technologies such as React.js, Next.js, TypeScript, and more, we ensure your project is developed using cutting-edge tools. This approach enhances performance, maintainability, and future-proofing.",
      icon: <MdIntegrationInstructions />,
    },
    {
      id: 4,
      title: "Full-Stack Capabilities",
      description:
        "Experience end-to-end development with PrismaDB for seamless data management. Our holistic approach to web development ensures data integrity and optimal performance, delivering comprehensive solutions.",
      icon: <MdOutlineStorage />,
    },
    {
      id: 5,
      title: "Hosting & Deployment",
      description:
        "Efficiency is key in our hosting and deployment strategies, ensuring reliable websites. Our focus on reliability and fast-loading websites contributes to an optimal user experience for your audience.",
      icon: <CiCloudOn />,
    },
    {
      id: 8,
      title: "Technical Support",
      description:
        "Our commitment extends beyond development. We offer ongoing technical support for a seamless user experience. Quick issue resolution is our priority, ensuring your web applications run smoothly.",
      icon: <MdOutlineSupportAgent />,
    },
  ];

  return (
    <section id="services">
      <Grid mt={"100px"} container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                width:{xs:"100%", sm:"80%", md:"400px"},
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", // جعل كل شيء في المنتصف
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
                  color: "wihte",
                  maxWidth: "270px",
                }}
              >
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ backgroundColor: "#ddd", marginTop: "80px" }} />
      
    </section>
  );
}
