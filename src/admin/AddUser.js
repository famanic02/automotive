import React from "react";
import useStats from "../utils/useStats";
import { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme)=>({
    
  }));

function AddUser(props) {
  //  const jwtToken = props.authData.signInUserSession.idToken.getJwtToken();
  const classes = useStyles();
  const url = "https://ecneg0srf4.execute-api.us-east-1.amazonaws.com/default/autoback";
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [customers,setCustomers] = useState('');
  const [isAdmin,setIsAdmin] = useState(0);
  const [error,setError] = useState(0);

  const handleSubmit = async ()=>{
      const formValues = {password,emailAddress:email,customer:customers,isAdmin};
      if(!password||!email||!customers||!isAdmin){
        setError(1);
        return;
      }
      const url =
    "https://ecneg0srf4.execute-api.us-east-1.amazonaws.com/default/create/user";
    const data = await fetch(url,{
     
       headers:{
        'Content-Type':'application/json'
       },
        method:'POST',
        body:JSON.stringify(formValues)
    })
    .then(res => res.json())
    .catch(err => {
      setError(err);
    });
    console.log(data)
      

  }
  
  


  return (<div>
    <Button
    variant="contained"
    onClick={() => handleClickOpen()}
    color="secondary"
    align="left"
  >
    Add User
  </Button>
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Please enter the details here to create a new user.
    </DialogContentText>
    <form>
   
    
   
    <TextField
      autoFocus
      margin="dense"
      name="password"
      label="Password"
      type="password"
      value={password}
      onChange={e=>setPassword(e.target.value)}

      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      name="email"
      label="Email"
      type="email"
      value={email}
      onChange={e=>setEmail(e.target.value)}
      fullWidth
    />
    
    <TextField
      autoFocus
      margin="dense"
      id="customers"
      label="Customers"
      type="text"
      value={customers}
      onChange={e=>setCustomers(e.target.value)}
      fullWidth
    />
      <FormControlLabel
        control={
          <Checkbox
            
            
            name="isAdmin"
            color="primary"
            value={isAdmin}
      onChange={e=>setIsAdmin(e.target.checked?1:0)}
          />
        }
        label="Admin"
      />
  
     
     </form>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button color="primary" onClick={handleSubmit}>
      Create
    </Button>
  </DialogActions>
</Dialog>
</div> 
    
  );
}

export default AddUser;
