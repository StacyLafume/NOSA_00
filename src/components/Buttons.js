import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Icon from '@mdi/react';
import { mdiShareVariant } from '@mdi/js';


const Buttons = () => {

    return (
        <Stack direction="row" spacing={2}>
            {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button> */}
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <Icon path={mdiShareVariant} size={1} />
        </Stack>
    )

}

export default Buttons

