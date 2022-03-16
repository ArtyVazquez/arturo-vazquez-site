import { Box, Grid } from '@mui/material';
import Footer from '../Components/General/Footer';
import SectionHeader from "../Components/Skills/SectionHeader";
import SkillLevelTable from "../Components/Skills/SkillLevelTable";
import Head from 'next/head';

export default function Skills() {
    function createData(name, skillLevel) {
        return { name, skillLevel };
    }
    const langNskill= [
        createData('Java', 4.5),
        createData('JavaScript', 4),
        createData('Python', 3),
        createData('C', 3.5),
        createData('OCaml', 3),
        createData('F#', 3),
        createData('C#', 3),
        createData('PHP', 3),
        createData('HTML', 5),
        createData('CSS', 3.5)
        ];

    const technNskill= [
        createData('React.js', 4.5),
        createData('Next.js', 3.5),
        createData('Bootstrap', 4),
        createData('MySQL', 4.5),
        createData('Git', 4.5),
        createData('JavaFX', 4),
        createData('Maven', 3),
        createData('JUnit', 4),
        createData('macOS', 4.5),
        createData('Windows', 4),
        createData('Linux (Ubuntu-Based)', 3)
    ];

    const otherNskill= [
        createData('Object-Oriented Programming (OOP)', 4.5),
        createData('Functional Programming', 4),
        createData('Data Structures', 4.5),
        createData('Design Patterns', 4),
        createData('Android App Development', 3.5),
        createData('Web Development', 3.5),
    ];

  return (
      <Box sx={{ flexGrow: 1,
                 my: 10,
                 mx: 3 }}>
          <Head>
            <title>Skills</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>  
          <Grid container spacing={15}>
              <Grid item xs={12} md={12} lg={4}>
                  <SectionHeader header='Technologies'/>
                  <SkillLevelTable skillsRow={technNskill} category='Technologies'/>
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                  <SectionHeader header='Coding'/>
                  <SkillLevelTable skillsRow={langNskill} category='Language'/>
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                  <SectionHeader header='Other'/>
                  <SkillLevelTable skillsRow={otherNskill} category='Other'/>
              </Grid>
          </Grid>
          <Footer />
      </Box>
  )
}