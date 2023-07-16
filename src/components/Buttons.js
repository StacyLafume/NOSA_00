import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const Buttons = () => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    )

}

export default Buttons

import Icon from '@mdi/react';
import { mdiShareVariant } from '@mdi/js';

<Icon path={mdiShareVariant} size={1} />