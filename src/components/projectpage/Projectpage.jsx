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
import BuildIcon from '@mui/icons-material/Build';
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
            fontSize: { xs: "1.9rem", sm: "1.6rem", md: "2.9rem" },
            textTransform: "uppercase",
          }}
        >
          My Projects
        </Typography>

        <Button
          variant="contained"
          startIcon={<HomeIcon sx={{ fontSize: { xs: 20, sm: 24, md: 26 } }} />}
          sx={{
            width: "100%",
            backgroundColor: "#0A1F44",
            color: "#fff",
            paddingY: { xs: 1.2, sm: 1.6, md: 1.8 },
            paddingX: { xs: 2, sm: 3 },
            fontWeight: 600,
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
            borderRadius: "12px",
            marginBottom: "24px",
            boxShadow: "0px 4px 12px rgba(212, 175, 55, 0.3)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#D4AF37",
              color: "#000",
              boxShadow: "0px 4px 14px rgba(212, 175, 55, 0.56)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Go to Home Page
          </Link>
        </Button>

        <Grid
          container
          spacing={1}
          wrap="nowrap"
          justifyContent="center"
          sx={{
            marginBottom: "16px",
            overflowX: "auto",
            paddingBottom: "8px",
            display: "flex",
            "&::-webkit-scrollbar": {
              height: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#D4AF37",
              borderRadius: "10px",
            },
          }}
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
                  padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px" },
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                  borderRadius: "8px",
                  backgroundColor:
                    selectedTech === category ? "#D4AF37" : "#0A1F44",
                  color: selectedTech === category ? "#000" : "#fff",
                  border:
                    selectedTech === category ? "none" : "1.2px solid #D4AF37",
                  whiteSpace: "nowrap",
                  minWidth: "max-content",
                  "&:hover": {
                    backgroundColor: "#D4AF37",
                    color: "#000",
                  },
                }}
              >
                {category === "all"
                  ? "All"
                  : category === "htmlcss"
                  ? "HTML/CSS"
                  : category === "react"
                  ? "React"
                  : category === "next"
                  ? "Next"
                  : "JS"}
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
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#ccc" }}>
            {project.description}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "#db1515ff", marginTop:"5px" }}>
            {project.more}
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
