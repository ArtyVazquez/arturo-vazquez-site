import { Box } from '@mui/material';
import ContactDescription from "../Components/Contact/ContactDescription";
import Footer from '../Components/General/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
      <Box sx={{ my: 10,
                 mx: 0 }}>
        <Head>
          <title>Contact</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ContactDescription />
        <Footer />
      </Box>
    );
}