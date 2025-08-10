"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Divider,
  Link,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from "@mui/icons-material/Link";
import Header from "../Ultimits/header";
import Footer from "../Ultimits/footer";

export default function ProjectPage({ toggleTheme, darkMode, projects }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedTech, setSelectedTech] = React.useState("all");

  if (!projects || !Array.isArray(projects)) {
    return (
      <Typography sx={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Projects data is missing or invalid.
      </Typography>
    );
  }

  const filteredProjects = projects.filter(
    (project) => selectedTech === "all" || project.tech === selectedTech
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section
        id="project"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #000000, #0A1F44)",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
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
          My Projects
        </Typography>

        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          sx={{
            width: "100%",
            backgroundColor: "#0A1F44",
            color: "#fff",
            paddingY: 1.5,
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.3)",
            "&:hover": {
           
              boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.56)",
            },
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Go to home page
          </Link>
        </Button>

        <Grid
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginBottom: "20px" }}
        >
          {["all", "htmlcss", "react", "htmlcssjs", "next"].map((category) => (
            <Grid item key={category}>
              <Button
                variant={selectedTech === category ? "contained" : "outlined"}
                onClick={() => {
                  setSelectedTech(category);
                  setCurrentIndex(0);
                }}
                sx={{
                  textTransform: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  marginTop: "10px",
                  backgroundColor:
                    selectedTech === category ? "#D4AF37" : "#0A1F44",
                  color: selectedTech === category ? "#000" : "#fff",
                  border:
                    selectedTech === category ? "none" : "1.5px solid #D4AF37",
                  "&:hover": {
                    backgroundColor: "#D4AF37",
                    color: "#000",
                  },
                }}
              >
                {category === "all"
                  ? "All Projects"
                  : category === "htmlcss"
                  ? "HTML & CSS"
                  : category === "react"
                  ? "React.js"
                  : category === "next"
                  ? "Next.js"
                  : "JavaScript"}
              </Button>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ color: "#ff5555", textAlign: "center", marginTop: "20px" }}
          >
            There are no projects for this section. Projects will be uploaded
            soon.
          </Typography>
        ) : isMobile ? (
          <Box
            sx={{ position: "relative", width: "100%", textAlign: "center" }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "#D4AF37",
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <Box sx={{ display: "inline-block", mx: "auto" }}>
              <ProjectCard project={filteredProjects[currentIndex]} />
            </Box>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "#D4AF37",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={3} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        maxWidth: "441px",
        width: 250,
        minWidth: "310px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: ".5s",
        padding: "5px",
        background: "rgba(10, 31, 68, 0.7)",
        borderRadius: "24px",
        boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.3)",
        border: "1px solid #D4AF37",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={project.photo}
          alt={project.title}
        />
        <Divider sx={{ backgroundColor: "#D4AF37", marginTop: "5px" }} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: "#D4AF37", fontWeight: "600" }}
          >
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "#ccc" }}>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{ justifyContent: "center", paddingBottom: "10px", gap: 2 }}
      >
        <Link href={project.linkview} target="_blank" rel="noopener">
          <IconButton>
            <LinkIcon sx={{ color: "#D4AF37" }} />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
