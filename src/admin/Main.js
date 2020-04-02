import React from "react";
import useStats from "../utils/useStats";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import UserGrid from "./UserGrid";
import Grid from "@material-ui/core/Grid";
import AddUser from "./AddUser";


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 100
  }
}));

function Main(props) {
  //  const jwtToken = props.authData.signInUserSession.idToken.getJwtToken();
  const classes = useStyles();
  const url =
    "https://ecneg0srf4.execute-api.us-east-1.amazonaws.com/default/list/users";
    
  var { stats: users, loading, error } = useStats(url);

  if (loading) return "Loading....";

  return (
    <Container className={classes.container}>
      <Grid item xs={3} align="left">
        <AddUser/>
      </Grid>
      
      <UserGrid users={users.Users}></UserGrid>
    </Container>
  );
}

export default Main;
