"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";

import { cards } from "../../data/skillsData";

export default function ToolsSection() {
  return (
    <>
      <section id="skills">
        <Divider sx={{ backgroundColor: "#ddd", marginTop: "230px" }} />

        <Typography
          variant="h3"
          className="tools-skils"
          gutterBottom
          sx={{ textAlign: "center", color: "#D4AF37", marginTop: "50px" }}
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
                      sx={{ color: "#ddd", marginTop: "10px" }}
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
