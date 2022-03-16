import React from 'react'
import ProjectSection from "../Components/Projects/ProjectSection";
import { Grid, Box } from "@mui/material";
import Footer from '../Components/General/Footer';
import Head from 'next/head';


export default function Projects() {

    function createProject(name, description, sourceCode, viewProject, img, sourceCodeLink, viewProjectLink) {
      return {name, description, sourceCode, viewProject, img, sourceCodeLink, viewProjectLink}
    }

    const web = [
      createProject("Vaccine Scheduler", "", true, false, "vaccine.png", "https://github.com/ArtyVazquez/Vaccine-Scheduler", ""),
      createProject("Crypto Info", "", true, true, "cryptoinfo.png", "https://github.com/jvazqu61/crypto-info", "https://crypto-info-mocha.vercel.app/"),
      createProject("Crypto-Go", "", true, true, "cryptogo.png", "https://github.com/jakeraffe/CS422-GR4", "https://61a58a63754976587bb7eeea--crypto-go.netlify.app/"), 
      createProject("Typing Speed Test", "", true, true, "tst.png", "https://github.com/ArtyVazquez/typing-speed-test", "https://typing-speed-test-seven.vercel.app/"),
      createProject("Meet Up", "", true, true, "meetups.png", "https://github.com/ArtyVazquez/Local-Meetups", "https://local-meetups.vercel.app/"),
      createProject("Candy Crush", "", false, true, "cc.png", "", "https://candy-crush-9p5atebaa-artyvazquez.vercel.app/")
    ]


    const android = [
      createProject("Gopher Hunting", "", false, true, "gopher.jpg", "", "https://youtu.be/FWHjXB5VedU"),
      createProject("Movie Collection", "", false, true, "movie.webp", "", "https://youtu.be/0m2Xd7xfgMU"), 
      createProject("Music Player", "", false, true, "music.webp", "", "https://youtu.be/TKHu_7-WmxM"),
    ]

    const other = [
      createProject("Database query language", "", true, false, "codingproj.png", "https://github.com/ArtyVazquez/Query-DB-Lang-Design", ""),
      createProject("Interpreter", "", true, false, "codingproj.png", "https://github.com/ArtyVazquez/Simple-Interpreter", ""), 
    ]

  return (
      <Box sx={{ flexGrow: 1,
                 my: 10,
                 mx: 3 }}>
        <Head>
          <title>Projects</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>  
        <Grid container spacing={15}>
              <Grid item lg={12}>
                  <ProjectSection sectionName="Web"
                                  imgDestination="/Images/webdev.png"
                                  data={web}/>
              </Grid>
              <Grid item lg={12}>
                  <ProjectSection sectionName="Android"
                                  imgDestination="/Images/android.png"
                                  data={android}/>
              </Grid>
              <Grid item lg={12}>
                  <ProjectSection sectionName="Other"
                                  imgDestination="/Images/other.png"
                                  data={other}/>
              </Grid>
        </Grid>
       <Footer />
    </Box>

  )
}
