import React from 'react';
import Container from '@mui/material/Box';
import SGridWCarousel from '../components/SGridWCarousel';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { Box } from '@mui/joy';
// import headshot from "../content/images/head-0.png"


const ArtistOfTheMonth = ({ artistOfTheMonthData, name, monthYear, mainArtwork, artistPara, exhibtionPara, backgroundColor }) => {

        const {headshot,artist_statement, exhibition_statement, exhibition_date, exhibition_name , exhibition_pieces,exhibition_poster } = artistOfTheMonthData

        console.log("exhibition_poster", exhibition_poster)

    return (
        <>
            <Divider textAlign="right" role="presentation" style={{ backgroundColor: 'orange', height: '.2rem', alignItems: 'center', margin: '10vh 0' }}>
                <h1 style={{ display: 'inline', backgroundColor: 'white', fontWeight: 'normal' }}>Artist Of The Month: {monthYear}</h1>
            </Divider>

            <Grid container sx={{ flexWrap: 'nowrap', backgroundColor: backgroundColor, padding: ' 1rem 4rem 2rem 4rem' }} spacing={1} >
                {/* Column 1 */}
                <Grid item xs={12} md={3}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', textShadow: 'rgb(255, 175, 32) 0px 7px 1px', textAlign: 'center' }}>{name}</h2>
                    <img
                        src={`${exhibition_poster}`}
                        loading="lazy"
                        alt="Main Artwork"
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>

                {/* Column 2 */}
                <Grid item xs={12} md={6} style={{ width: '100%' }}>
                    {/* Element 2 */}
                    <img
                        src={`${headshot}`}
                        loading="lazy"
                        alt="Headshot"
                        style={{ width: '30%' }}
                    // Add styles or attributes here if needed
                    />

                </Grid>

                {/* Column 3 */}
                <Grid item xs={12} md={6}>
                    {/* Element 3 */}
                    <h3>Artist statement</h3>
                    <p>{artist_statement}</p>

                    <h3>Exhibit statement</h3>
                    <p>{exhibition_statement}</p>
                </Grid>
            </Grid>
            <Container sx={{ width: '40vw' }}>
                <SGridWCarousel images={exhibition_pieces}/>
            </Container>
        </>
    )
}

export default ArtistOfTheMonth

