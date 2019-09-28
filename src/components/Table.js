import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { chartData } from './file'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginVertical: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650
  },
}));

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Letter</TableCell>
            {chartData.map(i => (
              <TableCell>{i.key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Repeats</TableCell>
            {chartData.map(i => (
              <TableCell>{i.value}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>Frequency</TableCell>
            {chartData.map(i => (
              <TableCell>{i.frequency}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
