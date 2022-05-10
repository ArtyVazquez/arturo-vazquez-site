import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import Image from "next/image";
import Link from 'next/link';

export default function ProjectCard(props) {

    function viewProject(sourceCode, viewProject, sourceCodeLink, viewProjectLink) {
        
        if (sourceCode && viewProject)
            return (<>
                        <Link href={sourceCodeLink} passHref> 
                            <Button size="small" variant="contained" color="secondary">Source Code</Button>
                        </Link>
                        <Link href={viewProjectLink} passHref> 
                            <Button size="small" variant="contained" color="secondary">View</Button>
                        </Link>
                    </>);
        if (sourceCode)
            return (
                <Link href={sourceCodeLink} passHref> 
                    <Button size="small" variant="contained" color="secondary">Source Code</Button>
                </Link>
                );
        if (viewProject)
            return (
                <Link href={viewProjectLink} passHref> 
                    <Button size="small" variant="contained" color="secondary">View</Button>
                </Link>
            );
    }

    return(
        <Card sx={{ my: 1,
                    p: 2,
                    borderRadius: '1rem',
                    shapeRendering: '1rem'
                    }}>
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
