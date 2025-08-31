"use client";

import React from "react";
import { projects } from "../../.././../data/projectData";
import ProjectPage from "../../../../components/projectpage/Projectpage";

export default function ContactScreen() {
  return (
    <>
      <ProjectPage projects={projects} />
    </>
  );
}
