import React from 'react';
import useStats from '../utils/useStats';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


function Main(props) {
    const classes = useStyles();
    const {users} = props;
    //  const jwtToken = props.authData.signInUserSession.idToken.getJwtToken();
    
       
    
    

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Created At</TableCell>
              <TableCell align="left">Last Modified</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Enabled</TableCell>
              <TableCell align="left">Actions</TableCell>
             
            
             
              
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.Username}>
                <TableCell component="th" scope="row">
                  {row.Username}
                </TableCell>
                <TableCell align="left">{row.Username}</TableCell>
                <TableCell align="left">{row.UserCreateDate}</TableCell>
                <TableCell align="left">{row.UserLastModifiedDate}</TableCell>
                <TableCell align="left">{row.UserStatus}</TableCell>
                <TableCell align="left">{row.Enabled?'Enabled':'Disabled'}</TableCell>
                <TableCell align="left">
                <DeleteIcon />
                <EditIcon />
                </TableCell>

               
             
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    );
  }
  
  export default Main;
