import React from 'react';
import Container from '@mui/material/Box';
import SGridWCarousel from '../components/SGridWCarousel';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';


const ArtistOfTheMonth = ({ name, monthYear, headshot, mainArtwork, artistPara, exhibtionPara, backgroundColor }) => {

    return (
        <>
            <Divider textAlign="right" role="presentation" style={{ backgroundColor: 'orange', height: '.2rem', alignItems: 'center', margin: '10vh 0' }}>
                <h1 style={{ display: 'inline', backgroundColor: 'white', fontWeight: 'normal' }}>Artist Of The Month: {monthYear}</h1>
            </Divider>

            <Grid container sx={{flexWrap: 'nowrap', backgroundColor:'#e6bdfc', padding: ' 1rem 4rem 2rem 4rem'}} spacing={1} >
                {/* Column 1 */}
                <Grid item xs={12} md={3}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', textShadow: 'rgb(255, 175, 32) 0px 7px 1px', textAlign:'center'}}>{name}</h2>
                    <img
                        src={`${mainArtwork}`}
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
                    <p>{artistPara} Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt non numquam fugiat eveniet rem animi enim alias reprehenderit! Alias, cumque nesciunt delectus quae pariatur nobis ad. Aspernatur, quidem dolores.</p>

                    <h3>Exhibit statement</h3>
                    <p>{exhibtionPara} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem reprehenderit enim doloribus, quidem expedita? Impedit, debitis odit ipsa, eveniet dolore laudantium repellat doloribus dignissimos perferendis, molestias tempore eligendi veritatis.</p>
                </Grid>
            </Grid>
<Container sx={{width:'40vw'}}>
            <SGridWCarousel />
</Container>
        </>
    )

}

export default ArtistOfTheMonth