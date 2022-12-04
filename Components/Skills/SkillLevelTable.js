import {List, ListItem, Rating, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Paper, styled} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TerminalIcon from '@mui/icons-material/Terminal';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#deeda6'
    }});

export default function SkillLevelTable({skillsRow, category}) {
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{category}</TableCell>
                        <TableCell align="right">Familiarity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skillsRow.map((skillsRow) => (
                        <TableRow
                            key={skillsRow.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {skillsRow.name}
                            </TableCell>
                            <TableCell align="right">
                                <StyledRating
                                    name="text-feedback"
                                    value={skillsRow.skillLevel}
                                    readOnly
                                    precision={0.5}
                                    IconContainerComponent={TerminalIcon}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}