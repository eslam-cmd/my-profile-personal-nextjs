"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Ultimits/header";
import MainSection from "./Pages/MainSection/page";
import ToolsSection from "./Pages/ToolsSection/page";
import ProjectSection from "./projectpage/page";
import Footer from "./components/Ultimits/footer";
import LoadingScreen from "./components/Ultimits/loading";
import ServiceSection from "./Pages/Servers Section/page";
import ExpandSdservices from "./Pages/Expand sdservices/page";
import ContactSection from "./Pages/ContactSection/page";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "url('/dark.png')" : "url('/light.png')",
          },
          text: {
            primary: darkMode ? "#ddd" : "#282828",
          },
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.style.background = `url('${darkMode ? "dark.png" : "light.png"}')`;
    document.body.style.color = darkMode ? "#AAA" : "#282828";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background 0.5s ease-in-out";

    if (!darkMode) {
      const blurLayer = document.createElement("div");
      blurLayer.style.position = "absolute";
      blurLayer.style.top = "0";
      blurLayer.style.left = "0";
      blurLayer.style.width = "100%";
      blurLayer.style.height = "100%";
      blurLayer.style.zIndex = "-1";
      document.body.appendChild(blurLayer);

      return () => {
        document.body.removeChild(blurLayer);
      };
    }
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header toggleTheme={toggleTheme} darkMode={darkMode} />
          <MainSection />
          <ToolsSection />
          <ServiceSection/>
          <ExpandSdservices/>
          {/* <ProjectSection />*/}
          <ContactSection />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
