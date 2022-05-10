import { Box } from '@mui/material';
import Image from 'next/image';
import EmailForm from "./EmailForm";

export default function ContactDescription() {
    return (
        <Box sx={{
            borderRadius: '1rem',
            p: 5,
            textAlign: 'center',
            boxShadow: 10,
            m: 5,
            bgcolor: '#5FA',
            color: 'black'
        }}>
            <Box component="h1"> Get In Touch </Box>
            <Box component="h2"> If you find my skills appealing. </Box>
            <Box component="p">
                Feel free to reach out to me if you are looking for a motivated individual who is willing to a role as a
                Software Developer.
            </Box>

            <EmailForm />
            <Box component="a" sx={{m: 4,  pt: 10}} href='https://github.com/artyvazquez'>
                <Image
                    src='/Images/github.png'
                    alt="Picture terminal symbol"
                    height={50}
                    width={50}
                    objectFit="responsive" />
            </Box>

            <Box component="a" sx={{m: 4,  pt: 10}} href='https://linkedin.com/in/artruo-vazquez-51b926192'>
                <Image
                    src='/Images/linkedin.png'
                    alt="Picture terminal symbol"
                    height={50}
                    width={50}
                    objectFit="responsive" />
            </Box>
        </Box>
    )
}