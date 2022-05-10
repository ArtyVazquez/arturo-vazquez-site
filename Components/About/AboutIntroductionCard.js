import { Box } from '@mui/material';

export default function AboutIntroductionCard(props) {
    return (
        <Box sx={{ boxShadow: 3,
                   padding: '2.5rem',
                   borderRadius: '1rem',
                   lineHeight: '3.9rem',
                   fontSize: '1.6rem',
                   mx: '3rem',
                   my: '5rem',
                   bgcolor: '#5FA',
                   color: 'black'}}>
            {props.description}
        </Box>
    )
}


