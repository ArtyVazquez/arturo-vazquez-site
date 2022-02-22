import { Box } from '@mui/material';

export default function AboutIntroductionCard(props) {
    return (
        <Box sx={{
            boxShadow: 3,
            padding: '1rem',
            borderRadius: '1rem',
            mx: '4rem',
            my: '0',
            lineHeight: '3.9rem',
            fontSize: '1.6rem'
  }}>
            {props.description}
        </Box>
    )
}