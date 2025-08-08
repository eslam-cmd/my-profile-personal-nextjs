"use client";

import React, { useState, useEffect, useMemo, Suspense, lazy } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

// مكونات رئيسية
import Header from "./components/Ultimits/header";
import Footer from "./components/Ultimits/footer";
import LoadingScreen from "./components/Ultimits/loading";

// أقسام الصفحة
import MainSection from "./Pages/MainSection/page";
import ToolsSection from "./Pages/ToolsSection/page";
import ServiceSection from "./Pages/Servers Section/page";
import ExpandSdservices from "./Pages/Expand sdservices/page";
import ContactSection from "./Pages/ContactSection/page";

// تحميل كسول للمكونات الثقيلة


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // إنشاء الثيم حسب الوضع
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#121212" : "#f5f5f5",
          },
          text: {
            primary: darkMode ? "#ddd" : "#282828",
          },
        },
      }),
    [darkMode]
  );

  // شاشة التحميل حسب تحميل الصفحة
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Box
          sx={{
            backgroundImage: `url(${darkMode ? "/dark.png" : "/light.png"})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            transition: "background 0.5s ease-in-out",
            minHeight: "100vh",
            color: darkMode ? "#AAA" : "#282828",
          }}
        >
          <Header toggleTheme={toggleTheme} darkMode={darkMode} />
          <MainSection />
          <ToolsSection />
          <ServiceSection />
          <ExpandSdservices />
          <Suspense
            fallback={
              <div style={{ textAlign: "center" }}>Loading Projects...</div>
            }
          >
          </Suspense>
          <ContactSection />
          <Footer />
        </Box>
      )}
    </ThemeProvider>
  );
}
