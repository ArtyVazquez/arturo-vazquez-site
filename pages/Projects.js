import React from 'react'
import ProjectSection from "../Components/Projects/ProjectSection";
import { Grid, Box } from "@mui/material";


export default function Projects() {

    function createProject(name, description, sourceCode, viewProject, img, sourceCodeLink, viewProjectLink) {
      return {name, description, sourceCode, viewProject, img, sourceCodeLink, viewProjectLink}
    }

    const web = [
      createProject("Crypto Info", "NextJs web app...", true, true, "cryptogo.png", "https://github.com/jvazqu61/crypto-info", "https://crypto-info-mocha.vercel.app/"),
      createProject("Crypto-Go", "React web app...", true, true, "cryptogo.png", "https://github.com/jakeraffe/CS422-GR4", "https://61a58a63754976587bb7eeea--crypto-go.netlify.app/"), 
      createProject("Typing Speed Test", "React web app...", true, true, "cryptogo.png", "https://61a58a63754976587bb7eeea--crypto-go.netlify.app/", "https://github.com/jakeraffe/CS422-GR4"),
      createProject("Meet Up", "React web app...", true, true, "cryptogo.png", "https://61a58a63754976587bb7eeea--crypto-go.netlify.app/", "https://github.com/jakeraffe/CS422-GR4")
    ]


  return (
      <Box sx={{ flexGrow: 1,
                 my: 10,
                 mx: 3 }}>
        <Grid container spacing={15}>
              <Grid item lg={12}>
                  <ProjectSection sectionName="Web"
                                  imgDestination="/Images/webdev.png"
                                  data={web}/>
              </Grid>
              <Grid item lg={12}>
                  <ProjectSection sectionName="Android"
                                  imgDestination="/Images/android.png"
                                  data={web}/>
              </Grid>
              <Grid item lg={12}>
                  <ProjectSection sectionName="Other"
                                  imgDestination="/Images/android.png"
                                  data={web}/>
              </Grid>
        </Grid>
    </Box>

  )
}
