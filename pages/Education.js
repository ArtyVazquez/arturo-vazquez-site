import { Box } from '@mui/material';
import EducationCard from "../Components/Education/EducationCard";
import Footer from '../Components/General/Footer';
import Head from 'next/head';

export default function Education() {
  return (
      <Box sx={{ my: 10,
                 mx: 0 }}>
        <Head>
          <title>Education</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>  
        <EducationCard
            uni='University of Illinois at Chicago, (Aug 2019-Dec 2021)'
            imgSrc='/Images/uic.png'
            major='Bachelor of Science in Computer Science'
            eduHighlights={["GPA: 3.92", "Honors: Summa Cum Laude", "TheDream.US National Scholarship"]}
        />
        <Box sx={{
            textAlign: 'center',
            my: 3}}>
        </Box>
          <EducationCard
              uni='Wilbur Wright College, Chicago, IL, (Aug 2017-May 2019)'
              imgSrc='/Images/ww.jpeg'
              major='Associates in General Studies'
              eduHighlights={["GPA: 3.52", "Star Scholarship"]}
          />
        <Footer />
      </Box>
  )
}