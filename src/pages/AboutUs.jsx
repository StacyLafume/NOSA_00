import React from 'react';
import Box from '@mui/joy/Box';
import { Container } from '@mui/material';
import Divider from '@mui/material/Divider';



const AboutUs = () => {
    return (
        <div id="/aboutus" style={{height:'90vh'}}>
            <h1 style={{ fontSize: '3.5rem', paddingLeft: '6.1rem', margin:'0', height:'4.3rem'}}>About Us</h1>
            <Divider variant="middle" sx={{backgroundColor: 'orange', height: '.2rem', margin:'0'}}/>
            <span style={{fontSize: '1.3rem', textAlign:'end', width:'100vw', display: 'inline-block', paddingRight:'3rem', marginBottom:'2rem'}}>Building a vibrant and inclusive art community in Boston</span>
            <Container sx={{ width: '100vw', margin: '0', display: 'grid', justifyItems: 'center'}}>
                <Box sx={{backgroundColor: 'black', width: '80vw', textAlign: 'center', margin: '0', padding:'1.5rem 3rem' }}>
                    <h2 style={{ color: '#ff8b26', fontSize: '1.7rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci harum dolor cupiditate! Inventore iste consectetur molestiae exercitationem, adipisci sit sint voluptatem tempora!</h2>
                </Box>
                <p style={{width: '95vw', textAlign: 'center', marginTop:'2rem'}}>NOSA is a community-driven initiative that connects local artists with the public, fosters creativity, and supports small businesses in Boston. NOSA is a community-driven initiative that connects local artists with the public, fosters creativity, and supports small businesses in Boston. connects local artists with the public, fosters. Our vision is to build a vibrant and inclusive art community in Boston that fosters creativity, promotes economic growth, and strengthens social bonds.</p>
            </Container>

        </div>
    )
}

export default AboutUs