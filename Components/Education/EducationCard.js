import {Box, List, ListItem} from "@mui/material";
import Image from "next/image";

export default function EducationCard(props) {
    return(
        <Box component="div" sx={{
            boxShadow: 10,
            padding: '2.5rem',
            borderRadius: '1rem',
            mx: '3rem',
            my: '5rem',
            bgcolor: '#deeda6',
            color: 'black'
        }}>
            <Box component="h1" sx={{ display: 'inline' }}>
                {props.uni}
            </Box>
            <Box component="div"
                 sx={{ display: 'inline',
                     ml: '8px'
                 }}>
                <Image
                    src={props.imgSrc}
                    alt="Picture uic symbol"
                    layout="fixed"
                    height={85}
                    width={85}
                />
            </Box>
            <Box component="h2">
                {props.major}
            </Box>
            <List>
                {props.eduHighlights.map((ele, index) => {
                    return <ListItem key={index}> {ele} </ListItem>;
                })}
            </List>
        </Box>
    )
}