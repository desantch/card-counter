import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {


  function createData(
    type: string,
    likelihood: number,
    cardsLeft: number,
  
  ) {
    return { type, likelihood, cardsLeft};
  }
  
  const rows = [
   
    createData('A', Math.round(((props.card1 / props.cardsLeft) * 100)*100)/100, props.card1),
    createData('2', Math.round(((props.card2 / props.cardsLeft) * 100)*100)/100, props.card2),
    createData('3',Math.round(((props.card3 / props.cardsLeft) * 100)*100)/100, props.card3),
    createData('4',Math.round(((props.card4 / props.cardsLeft) * 100)*100)/100, props.card4),
    createData('5',Math.round(((props.card5 / props.cardsLeft) * 100)*100)/100, props.card5),
    createData('6',Math.round(((props.card6 / props.cardsLeft) * 100)*100)/100, props.card6),
    createData('7',Math.round(((props.card7 / props.cardsLeft) * 100)*100)/100, props.card7),
    createData('8',Math.round(((props.card8 / props.cardsLeft) * 100)*100)/100, props.card8),
    createData('9',Math.round(((props.card9 / props.cardsLeft) * 100)*100)/100, props.card9),
    createData('10/J/Q/K',Math.round(((props.card10 / props.cardsLeft) * 100)*100)/100, props.card10),

  ];
 

  return (
    <TableContainer component={Paper}>
      <Table sx={{  width: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Card No.</TableCell>
            <TableCell align="center">Likelihood</TableCell>
            <TableCell align="center">Cards left</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.likelihood}</TableCell>
              <TableCell align="right">{row.cardsLeft}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}