import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function HiLoTable(props) {


  function createData(
    runningCount: number,
    trueCount: number,
    decksLeft: number,
    playerEdge: string,
  
  ) {
    return { runningCount, trueCount, decksLeft, playerEdge};
  }
  
  const rows = [
   
    createData(Math.round(((props.runningCount) * 100)*100)/100, Math.round(((props.trueCount) * 100)*100)/100, Math.round(((props.decksLeft) * 100)*100)/100,props.playerEdge),
  
    

  ];
 

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead  > 
          <TableRow>
            <TableCell align="center">Running Count</TableCell>
            <TableCell align="center">True Count</TableCell>
            <TableCell align="center">Decks Left</TableCell>
            <TableCell align="center">Player Edge</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.runningCount}</TableCell>
              <TableCell align="right">{row.trueCount}</TableCell>
              <TableCell align="right">{row.decksLeft}</TableCell>
              <TableCell align="right">{row.playerEdge}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}