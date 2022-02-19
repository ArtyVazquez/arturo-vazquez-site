import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Box} from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
      <Box
        sx={{
          width:'100%',
          padding: '5rem',
          marginTop: '3rem',
      }}>


      <Typography variant="h2" 
        sx={{
     
        }}>
          Hi, Arturo Vazquez
        </Typography>

        <Box sx={{
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'start',
             justifyContent:  'space-evenly',
             marginButtom: '10rem',
        }}>
          
        <Box sx={{
          alignSelf: 'end'
        }}>
          <Image
                src='/Images/terminal.png'
                alt="Picture terminal symbol"
                height={130}
                width={130}
                objectFit="responsive"
              />
        </Box>
        
        <Box>
          <Image
              src='/Images/coding.png'
              alt="Picture pc"
              height={512}
              width={512}
              objectFit="responsive"
            />
        </Box>

        <Box>
          <Image
              src='/Images/terminal.png'
              alt="Picture terminal symbol"
              height={130}
              width={130}
              objectFit="responsive"
            />
        </Box>


        </Box>


        <Typography variant="h4" 
        sx={{
     
        }}>
          Hello,
        </Typography>
        
        <Typography variant="p" 
        sx={{
            fontSize: '1.5rem',
            lineHeight: '2.3', 
        }}>
        I have recently earned a Bachelor of Science in Computer Science from the University 
        of Illinois Chicago. Throughout my time there I found myself enjoying software
        development as I took many software development technical electives. I really found
        myself enjoying team projects as everyone tends to have different programming backgrounds
        and different ways of solving problems. There was always something that I learned when
        working in teams that I have applied to future projects. I also really enjoy learning
        new things, as of now I have really been enjoying learning about full stack web development.
        </Typography>

        
      
      </Box>

   
  )
}