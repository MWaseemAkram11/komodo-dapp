import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  tokens,coins
) {
  return { name, calories, fat, carbs, protein,tokens,coins };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 77777, 203),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,.9902,123),
];

export default function CustomizedTables(props) {
    console.log(`generic table props --->`, props.data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Daemons Host</StyledTableCell>
            <StyledTableCell align="right">Daemon Name</StyledTableCell>
            <StyledTableCell align="right">Daemon User</StyledTableCell>
            <StyledTableCell align="right">Pubkey&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">TokenId&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">TokenBalance&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">CoinsBalance&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.tokens}</StyledTableCell>
              <StyledTableCell align="right">{row.coins}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
