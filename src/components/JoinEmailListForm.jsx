import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '53vh',
    padding: theme.spacing(2),
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
    height: '56px',
    width: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '57%',
    marginBottom: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
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
       <img
        src='https://secure.meetupstatic.com/photos/event/8/2/2/d/clean_511833325.webp'
        alt="Join Our Email List"
        className={classes.image}
       
      />
      <Box className={classes.formWrapper}>
        
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="center"> {/* Set alignItems to center */}
            <Grid item xs={12}>
              <TextField
                required
                type="email"
                label="Join our mailing list!"
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
                fullWidth
                className={classes.submitButton}
              >
                Join
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default JoinEmailListForm;
