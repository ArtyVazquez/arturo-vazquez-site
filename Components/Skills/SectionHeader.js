import { Box } from '@mui/material';

export default function SectionHeader(props) {
    return(
        <Box component='h1' sx={{
            boxShadow: 10,
            borderRadius: '1rem',
            p: 1,
            textAlign: 'center',
            bgcolor: '#5FA',
            color: 'black'
        }}>
            {props.header}
        </Box>
    )
}