"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub, FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMui, SiAxios, SiTypescript, SiExpress, SiPostgresql, SiPostman, SiNextdotjs, SiJavascript, SiReactrouter 
} from "react-icons/si";

const cards = [
  { id: 1, title: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
  { id: 2, title: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
  { id: 3, title: "Tailwind", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { id: 4, title: "Bootstrap", icon: <FaBootstrap size={40} color="#7952b3" /> },
  { id: 6, title: "React", icon: <FaReact size={40} color="#61DBFB" /> },
  { id: 9, title: "JavaScript", icon: <SiJavascript size={40} color="#f7df1e" /> },
  { id: 10, title: "MUI", icon: <SiMui size={40} color="#007fff" /> },
  { id: 11, title: "React Router", icon: <SiReactrouter size={40} color="#f44250" /> },
  { id: 12, title: "GitHub", icon: <FaGithub size={40} color="#ccc" /> },
  { id: 13, title: "Axios", icon: <SiAxios size={40} color="#5a29e4" /> },
  { id: 14, title: "Next.js", icon: <SiNextdotjs size={40} color="#fff" /> },
  { id: 15, title: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  { id: 16, title: "Node.js", icon: <FaNodeJs size={40} color="#68a063" /> },
  { id: 17, title: "Express", icon: <SiExpress size={40} color="#ccc" /> },
  { id: 18, title: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { id: 19, title: "Postman", icon: <SiPostman size={40} color="#ff6c37" /> },
];



export default function ToolsSection() {
  return (
    <>
      <section id="skills">
        <Divider sx={{ backgroundColor: "#ddd", marginTop: "230px" }} />

        <Typography
          variant="h3"
          className="tools-skils"
          gutterBottom
          sx={{ textAlign: "center", color: "#5c6bc0", marginTop: "50px" }}
        >
          Tools & Skills
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          I Work Hard To Improve My Skills Regularly
        </Typography>

        <Grid
          container
          spacing={1.5}
          justifyContent="center"
          sx={{ marginTop: "50px" }}
        >
          {cards.map((card) => (
            <Grid xs={6} sm={4} lg={2} key={card.id}>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(13, 21, 29, 0.37)",
                  textAlign: "center",
                  width: "150px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardContent
                    className="card-tools"
                    sx={{ textAlign: "center" }}
                  >
                    {card.icon}
                    <Typography
                      className="title-card"
                      variant="body1"
                      sx={{ color: "#5c6bc0", marginTop: "10px" }}
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
}
