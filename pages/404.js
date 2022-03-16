import { Box, Typography } from '@mui/material';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Box sx={{ 
        display: 'flex',
        bgcolor: 'background.default',
        color: 'text.primary' }} >
        <Head>
          <title>Page Not Found ;(</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Typography variant='h6'> 
            404 | This page could not be found ;(
        </Typography>
    </Box>
  )
}