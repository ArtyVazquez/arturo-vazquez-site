import Head from 'next/head'
import { Box } from '@mui/material'
import Image from 'next/image'
import AboutIntroductionCard from "../Components/About/AboutIntroductionCard";
import Footer from '../Components/General/Footer';

export default function Home() {
  return (
      <Box sx={{  my: 10,
                  mx: 3 }}>
          <Head>
            <title>About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>  

          <Box sx={{ textAlign: 'center'}}>
              <Image
                  src='/Images/coding.png'
                  alt="Picture pc"
                  height={250}
                  width={250}
                  objectFit="responsive"
              />
          </Box>

            <Box component="h1" sx={{
                textAlign: 'center',
                fontSize: '2.5rem'}}>
                Hello,
            </Box>
            <AboutIntroductionCard description="
            I'm Arturo Vazquez,
            I earned a Bachelor of Science in Computer Science from the University
            of Illinois Chicago in late 2021. I've been working as a Software Developer/QA Analyst for the past year
            in the healthcare field. I have particularly been exposed to Curam Social Program Management software and have
            been part of various functional teams."/>
         
          <Footer />
      </Box>
  )
}