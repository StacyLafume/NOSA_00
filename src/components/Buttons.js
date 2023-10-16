import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
   
  }));


const  SendButton = () => {

    return (
        
            <Button  type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        
    )

}

const DonateButton = ({color}) => {
    const classes = useStyles();


    return (
        <Stack>
            <a href="https://donate.stripe.com/test_14k4indnng4I5KU9AA" target="_blank">
            <Button  variant="contained" style={ {backgroundColor:`${color}`} }endIcon={<FavoriteIcon/>}>
                Donate here
            </Button>
            </a>
        </Stack>
    )

}


export  {SendButton, DonateButton }
