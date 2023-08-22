import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{textAlign: 'center',
    minHeight: '3vh',
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center'
    }} component="p">
    © 2023 Arturo Vazquez.
    </Box>
  )
}
