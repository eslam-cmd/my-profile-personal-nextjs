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
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function ProjectWeb({ toggleTheme, darkMode, projects }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedTech, setSelectedTech] = React.useState("all");
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

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
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;

      const cardElement = document.querySelector(".project-card-active");
      if (cardElement) {
        cardElement.style.transform = "translateX(-100px)";
        cardElement.style.opacity = "0";

        setTimeout(() => {
          if (nextIndex >= filteredProjects.length) {
            return 0;
          }
          return nextIndex;
        }, 300);
      }

      return nextIndex >= filteredProjects.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex - 1;

      const cardElement = document.querySelector(".project-card-active");
      if (cardElement) {
        cardElement.style.transform = "translateX(100px)";
        cardElement.style.opacity = "0";

        setTimeout(() => {
          if (prevIndexValue < 0) {
            return filteredProjects.length - 1;
          }
          return prevIndexValue;
        }, 300);
      }

      return prevIndexValue < 0 ? filteredProjects.length - 1 : prevIndexValue;
    });
  };

  const NavigationDots = ({ count, activeIndex, onDotClick }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        mt: 3,
        flexWrap: "wrap",
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onDotClick(index)}
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor:
              activeIndex === index ? "#D4AF37" : "rgba(255,255,255,0.3)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor:
                activeIndex === index ? "#D4AF37" : "rgba(255,255,255,0.5)",
            },
          }}
        />
      ))}
    </Box>
  );

  const EnhancedNavigationButtons = ({
    onPrev,
    onNext,
    disabledPrev,
    disabledNext,
  }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        mt: 3,
      }}
    >
      <IconButton
        onClick={onPrev}
        disabled={disabledPrev}
        sx={{
          backgroundColor: "#0A1F44",
          color: "#D4AF37",
          border: "2px solid #D4AF37",
          padding: "12px",
          "&:hover": {
            backgroundColor: "#D4AF37",
            color: "#000",
            transform: "scale(1.1)",
          },
          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
          transition: "all 0.3s ease",
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <Typography
        variant="body2"
        sx={{ color: "#D4AF37", minWidth: "80px", textAlign: "center" }}
      >
        {currentIndex + 1} / {filteredProjects.length}
      </Typography>

      <IconButton
        onClick={onNext}
        disabled={disabledNext}
        sx={{
          backgroundColor: "#0A1F44",
          color: "#D4AF37",
          border: "2px solid #D4AF37",
          padding: "12px",
          "&:hover": {
            backgroundColor: "#D4AF37",
            color: "#000",
            transform: "scale(1.1)",
          },
          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
          transition: "all 0.3s ease",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
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
          Projects Website
        </Typography>

        

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
            sx={{
              position: "relative",
              width: "100%",
              textAlign: "center",
              overflow: "hidden",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Box
              sx={{
                display: "inline-block",
                mx: "auto",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: "translateX(0)",
                opacity: 1,
              }}
              className="project-card-active"
            >
              <ProjectCard project={filteredProjects[currentIndex]} />
            </Box>

            <EnhancedNavigationButtons
              onPrev={handlePrev}
              onNext={handleNext}
              disabledPrev={filteredProjects.length <= 1}
              disabledNext={filteredProjects.length <= 1}
            />

            <NavigationDots
              count={filteredProjects.length}
              activeIndex={currentIndex}
              onDotClick={(index) => setCurrentIndex(index)}
            />
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
        transition: "all 0.3s ease",
        padding: "5px",
        background: "rgba(10, 31, 68, 0.7)",
        borderRadius: "24px",
        boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.3)",
        border: "1px solid #D4AF37",
        "&:hover": {
          transform: "translateY(-5px) scale(1.02)",
          boxShadow: "0px 8px 20px rgba(212, 175, 55, 0.4)",
        },
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
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", color: "#db1515ff", marginTop: "5px" }}
          >
            {project.more}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{ justifyContent: "center", paddingBottom: "10px", gap: 2 }}
      >
        <Link href={project.linkview} target="_blank" rel="noopener">
          <IconButton>
            <VisibilityIcon sx={{ color: "#D4AF37" }} />
          </IconButton>
          
        </Link><IconButton>
            <MoreHorizIcon sx={{ color: "#D4AF37" }} />
          </IconButton>
      </CardActions>
    </Card>
  );
}
