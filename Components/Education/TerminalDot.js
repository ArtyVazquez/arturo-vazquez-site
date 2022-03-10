import { Box } from '@mui/material';
import Image from 'next/image';

export default function TerminalDot() {
    return (
        <Box component='span'  sx={{
            textAlign: 'center',
            m: 2
        }}>
            <Image
                src='/Images/terminal.png'
                alt="Picture terminal symbol"
                height={8}
                width={8}
                objectFit="responsive" />
        </Box>
    )
}