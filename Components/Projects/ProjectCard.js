import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Image from "next/Image";

export default function ProjectCard(props) {
    return(
        <Card sx={{ my: 1,
                    p: 2 }}>
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    alt="green iguana"*/}
            {/*    height="400"*/}
            {/*    image="Images/terminal.png"*/}
            {/*/>*/}
            <Image src="/Images/terminal.png"
                   alt={`Picture symbol`}
                   width={300}
                   height={300}
                   objectFit="responsive"/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Source Code</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}