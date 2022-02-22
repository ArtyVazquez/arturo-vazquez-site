import { Typography, Box, List, ListItem, Container} from '@mui/material';
import EducationCard from "../Components/Education/EducationCard";
import Image from "next/image";
import TerminalDot from "../Components/Education/TerminalDot";

export default function Education() {
  return (
      <Box>
          <EducationCard
              uni='University of Illinois at Chicago, (Aug 2019-Dec 2021)'
              imgSrc='/Images/uic.png'
              major='Bachelor of Science in Computer Science'
              eduHighlights={["GPA: 3.92", "Honors: Summa Cum Laude", "TheDream.US National Scholarship"]}
          />
        <Box sx={{
            textAlign: 'center',
            my: 3}}>
            <TerminalDot />
            <TerminalDot />
            <TerminalDot />
            <TerminalDot />
            <TerminalDot />
            <TerminalDot />
        </Box>
          <EducationCard
              uni='Wilbur Wright College, Chicago, IL, (Aug 2017-May 2019)'
              imgSrc='/Images/ww.jpeg'
              major='Associates in General Studies'
              eduHighlights={["GPA: 3.52", "Star Scholarship"]}
          />
      </Box>
  )
}