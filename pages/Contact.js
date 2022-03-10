import { Box } from '@mui/material';
import ContactDescription from "../Components/Contact/ContactDescription";
import Footer from '../Components/General/Footer';

export default function Contact() {
  return (
      <Box sx={{ my: 10,
                 mx: 0 }}>
        <ContactDescription />
        <Footer />
      </Box>
    );
}