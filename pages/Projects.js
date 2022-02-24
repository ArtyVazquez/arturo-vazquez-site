import React from 'react'
import ProjectSection from "../Components/Projects/ProjectSection";
import { Grid, Box } from "@mui/material";
import SectionHeader from "../Components/Skills/SectionHeader";
import SkillLevelTable from "../Components/Skills/SkillLevelTable";

export default function Projects() {
  return (
      <Box sx={{ flexGrow: 1,
                 my: 10,
                 mx: 3 }}>
        <Grid container spacing={15}>
              <Grid item xs={12} md={12} lg={12}>
                <ProjectSection sectionName="Android"
                                imgDestination="/Images/android.png"/>
              </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ProjectSection sectionName="Relational Databases"
                            imgDestination="/Images/db.png"/>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ProjectSection sectionName="Web"
                            imgDestination="/Images/webdev.png"/>
          </Grid>
        </Grid>
    </Box>

  )
}
