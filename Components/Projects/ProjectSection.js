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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2 }}>

                <Box component="h1">
                    {props.sectionName} |    
                </Box>

                <Box>
                    <Image src={props.imgDestination}
                           alt={`Picture ${props.sectionName} symbol`}
                           width={100}
                           height={100}
                           objectFit="responsive"/>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1,
                my: 10,
                mx: 3 }}>
                <Grid container spacing={15}>
                   
                   
                        {props.data.map((data, index) => {
                            return(
                                <Grid item xs={12} md={6} lg={4}> 
                                    <ListItem key={index}> 
                                        <ProjectCard name={data.name}
                                                    description={data.description}
                                                    sourceCode={data.sourceCode}
                                                    viewProject={data.viewProject}
                                                    img={data.img}
                                                    sourceCodeLink={data.sourceCodeLink}
                                                    viewProjectLink={data.viewProjectLink}
                                                    /> 
                                    </ListItem>
                                </Grid>
                            )
                        })}
                    
                </Grid>
            </Box>

        </Box>
    );
}