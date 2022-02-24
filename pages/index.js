import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Box} from '@mui/material'
import { positions } from '@mui/system';
import Image from 'next/image'
import AboutIntroductionCard from "../Components/About/AboutIntroductionCard";

export default function Home() {
  return (
      <Box sx={{  my: 10,
                  mx: 3 }}>
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
            I have recently earned a Bachelor of Science in Computer Science from the University
            of Illinois Chicago. Throughout my time there I found myself enjoying software
            development as I took many software development technical electives. I really found
            myself enjoying team projects as everyone tends to have different programming backgrounds
            and different ways of solving problems. There was always something that I learned when
            working in teams that I have applied to future projects. I also really enjoy learning
            new things, as of now I have really been enjoying learning about full stack web development.
            "/>
          <Box sx={{
            textAlign: 'center',
            m: 3
          }}>
              <Image
                  src='/Images/terminal.png'
                  alt="Picture terminal symbol"
                  height={60}
                  width={60}
                  objectFit="responsive" />
          </Box>
      </Box>
  )
}