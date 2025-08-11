"use client";

import React from "react";
import Header from "../../components/Ultimits/header";
import Footer from "../../components/Ultimits/footer";
import { projects } from "../../data/projectData";
import ProjectPage from "../../components/projectpage/Projectpage";

export default function ContactScreen() {
  return (
    <>
      <ProjectPage projects={projects} />
    </>
  );
}
