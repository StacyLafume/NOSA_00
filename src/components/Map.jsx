import {
  Grid,
  Box,
} from "@mui/material"

const Map = () => {
  return (
    <Box sx={{width:"100%"}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{ height: "450px" }}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.6222396426947!2d-71.08765572389233!3d42.32925537119576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b25c6927a3f%3A0xde10c336b7318a86!2sNOSA%20Boston!5e0!3m2!1sen!2sus!4v1697423469048!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Map;
