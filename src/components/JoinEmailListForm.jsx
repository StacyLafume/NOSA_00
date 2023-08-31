import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { DonateButton } from "./Buttons"
import Jump from 'react-reveal/Jump';



const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    paddingLeft: "50px",
    minHeight: "40vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  formWrapper: {
    width: '100%',
  },
  inputField: {
    height: '56px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,

  },
  submitButton: {
    height: "3vh",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight : "200 !important",
    margin: "auto !important"
  },
  donate: {
    width: "100%",
    height: "6vh",
  }
}));

const JoinEmailListForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., submit the email to the server)
    console.log('Email submitted:', email);
    // Reset the form after submission
    setEmail('');
  };

  return (
    <div className={classes.formContainer}>
      
      <Box className={classes.formWrapper}>
        
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="center"> {/* Set alignItems to center */}
          <Typography className={classes.title}align={"center"} variant={"h4"}> Join our mailing list <Jump><MailOutlineIcon /></Jump></Typography>
            <Grid item xs={12}>
              <TextField
                required
                type="email"
                label=""
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              
                className={classes.submitButton}
              >
                Join
              </Button>
              <DonateButton className={classes.donate}/>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default JoinEmailListForm;
