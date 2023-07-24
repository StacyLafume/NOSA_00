import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  Container
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import JoinEmailListForm from './JoinEmailListForm';


const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
}));


const ContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear validation error when user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are validation errors, set them in the state and prevent form submission
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here (e.g., send the form data to a server)
    console.log(formData);

    // Reset the form after submission (if desired)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <Container maxWidth="xl">
    <Grid container spacing={1}>
    <Grid item xs={7}>
      <Box sx={{ height: '100vh' }}>

    <div className={classes.formContainer}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
      </Grid>
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
      />
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel>Subject</InputLabel>
        <Select
          required
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <MenuItem value="general">General Inquiry</MenuItem>
          <MenuItem value="support">Technical Support</MenuItem>
          <MenuItem value="feedback">Feedback</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
    </Box>
    </Grid>
    <Grid item xs={5}>
      <Box  sx={{ height: '100vh' }}><JoinEmailListForm/></Box>
    </Grid>
  </Grid>
  </Container>
  );
};

export default ContactForm;

// In 

// const ActionForm = () => {
      
//     return (
      
//     )
   
// }

// export default ActionForm