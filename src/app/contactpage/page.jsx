"use client";

import * as React from "react";
import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Link,
  Typography,
  Grid,
  TextField,
  Snackbar,
  Alert,
  ButtonGroup,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

export default function ContactFormPage() {
  const formRef = useRef();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_un3a9dt",
        "template_r6rw1jg",
        formRef.current,
        "TJQrTHj8YbQMKH9xb"
      )
      .then(
        () => {
          setOpenSnackbar(true);
          setSending(false);
        },
        (error) => {
        
          setSending(false);
        }
      );
  };

  return (
    <Box
      id="contactpage"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('/light.png')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Grid container justifyContent="center">
        <Card
          sx={{
            boxShadow: 4,
            width: "100%",
            maxWidth: 600,
            backgroundColor: "rgba(54, 56, 77, 0.48)",
            border: "1px solid #1976d2",
            borderRadius: 3,
            backdropFilter: "blur(6px)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              color="primary"
              fontWeight={700}
              gutterBottom
            >
              Let's work together
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "#ccc" }}>
              You can send your inquiries and we will respond to you as soon as
              possible.
            </Typography>

            <form ref={formRef} onSubmit={sendEmail}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                  InputProps={{ style: { color: "#fff" } }}
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  required
                  InputProps={{ style: { color: "#fff" } }}
                />
                <TextField
                  name="message"
                  label="Your message ..."
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  InputProps={{ style: { color: "#fff" } }}
                />
              </Box>

              <CardActions sx={{ justifyContent: "space-between", mt: 3 }}>
                <Button
                  startIcon={<HomeIcon />}
                  href="/"
                  variant="outlined"
                  sx={{ color: "#ddd", borderColor: "#1976d2" }}
                >
                  Home
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={sending}
                  sx={{ px: 4, py: 1.5 }}
                >
                  {sending ? "Sending..." : "Submit"}
                </Button>
              </CardActions>
            </form>
          </CardContent>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}
          >
            <Link
              href="mailto:hdayaaslam34@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <EmailIcon sx={{ color: "#ddd" }} />
            </Link>
            <Link
              href="https://www.facebook.com/islam.hadaya.2025?mibextid=ZbWKwL"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon sx={{ color: "#3f51b5" }} />
            </Link>
            <Link
              href="https://github.com/eslam-cmd"
              target="_blank"
              aria-label="GitHub"
            >
              <GitHubIcon sx={{ color: "#ddd" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eslam-hd-60a056357"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ color: "rgb(101, 115, 195)" }} />
            </Link>
          </Box>
        </Card>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          The message was sent successfully ✅
        </Alert>
      </Snackbar>
    </Box>
  );
}
