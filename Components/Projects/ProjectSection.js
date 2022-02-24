import { Box, Paper, List, ListItem, Grid } from "@mui/material";
import Image from "next/Image";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../Skills/SectionHeader";
import SkillLevelTable from "../Skills/SkillLevelTable";

export default function ProjectSection(props) {
    return (
        <Box sx={{ flexGrow: 1,
                   boxShadow: 10,
                   p: 2,
                   borderRadius: '1rem' }}>

            <Box sx={{ display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2 }}>

                <Box component="h1">
                    {props.sectionName}
                </Box>

                <Box>
                    <Image src={props.imgDestination}
                           alt={`Picture ${props.sectionName} symbol`}
                           width={300}
                           height={300}
                           objectFit="responsive"/>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1,
                my: 10,
                mx: 3 }}>
                <Grid container spacing={15}>
                    <Grid item xs={12} md={12} lg={4}>
                        <ListItem> <ProjectCard /> </ListItem>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <ListItem> <ProjectCard /> </ListItem>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <ListItem> <ProjectCard /> </ListItem>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}