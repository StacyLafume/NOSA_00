import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    donate: {
      width: "100%",
      height: "6vh",
    }
  }));


const  SendButton = () => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    )

}

const DonateButton = () => {
    const classes = useStyles();


    return (
        <Stack className={classes.donate}  direction="column" spacing={2} mt={2}>
            <Button  variant="contained" endIcon={<FavoriteIcon/>}>
                Donate
            </Button>
        </Stack>
    )

}


export  {SendButton, DonateButton }
