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
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    )

}

const DonateButton = ({color}) => {
    const classes = useStyles();


    return (
        <Stack  >
            <Button  variant="contained" style={ {backgroundColor:`${color}`} }endIcon={<FavoriteIcon/>}>
                Donate here
            </Button>
        </Stack>
    )

}


export  {SendButton, DonateButton }
