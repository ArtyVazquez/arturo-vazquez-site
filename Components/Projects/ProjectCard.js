import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { route } from 'next/dist/server/router';
import Image from "next/Image";
import Link from 'next/link';

export default function ProjectCard(props) {

    function viewProject(sourceCode, viewProject, sourceCodeLink, viewProjectLink) {
        
        if (sourceCode && viewProject)
            return (<>
                        <Link href={sourceCodeLink}> 
                            <Button size="small" variant="contained" color="secondary">Source Code</Button>
                        </Link>
                        <Link href={viewProjectLink}> 
                            <Button size="small" variant="contained" color="secondary">View</Button>
                        </Link>
                    </>);
        if (sourceCode)
            return (
                <Link href={sourceCodeLink}> 
                    <Button size="small" variant="contained" color="secondary">Source Code</Button>
                </Link>
                );
        if (viewProject)
            return (
                <Link href={viewProjectLink}> 
                    <Button size="small" variant="contained" color="secondary">View</Button>
                </Link>
            );
    }

    return(
        <Card sx={{ my: 1,
                    p: 2,
                    borderRadius: '1rem',
                    shapeRendering: '1rem',
                    border: 1,
                    borderColor: 'primary.main'}}>
            <Image src={`/Images/${props.img}`}
                   alt={`Picture symbol`}
                   width={300}
                   height={200}
                   objectFit="responsive"/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                {viewProject(props.sourceCode, props.viewProject, props.sourceCodeLink, props.viewProjectLink)}
            </CardActions>
        </Card>
    );
}
