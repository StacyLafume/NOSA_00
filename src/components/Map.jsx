import {
  Grid,
  Box,
} from "@mui/material"

const Map = () => {
  return (
    <Box sx={{width:"100%"}}>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Box sx={{ height: "450px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.6220571587924!2d-71.08995171054069!3d42.32925926278794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a3ab3fb86df%3A0xdef4d44113240df0!2s2377%20Washington%20St%2C%20Roxbury%2C%20MA%2002119!5e0!3m2!1sen!2sus!4v1690303162050!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ height: '450px' }}>
            <img
              height="450"
              src="https://github.com/StacyLafume/NOSA_00/assets/47963818/be4c176e-9566-457b-b7c3-825e7940a1f6"
              width= '100%'
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;
