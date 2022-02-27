import Image from 'next/Image';
import { Box, Typography } from '@mui/material';
import ContactDescription from "../Components/Contact/ContactDescription";
import EmailForm from "../Components/Contact/EmialForm";

export default function Contact() {
  return (
      <Box sx={{ my: 10,
                 mx: 0 }}>
        <ContactDescription />
      </Box>
    );
}