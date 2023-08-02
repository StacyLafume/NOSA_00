import React from 'react';
import Container from '@mui/material/Box';
import SGridWCarousel from '../components/SGridWCarousel';
import { Box } from '@mui/joy';


const ArtistOfTheMonth = ({ name, monthYear, headshot, mainArtwork, artistPara, exhibtionPara, backgroundColor }) => {

    return (
        <>
            <h1>Artist Of The Month: {monthYear}</h1>
            <Container id="/artistofthemonth" sx={{ backgroundColor: { backgroundColor } }}>
                <h2>{name}</h2>
                <img
                    src={`${mainArtwork}`}
                    //   srcSet={`${}`}
                    //   alt={title}
                    loading="lazy"
                    style={{
                        // borderBottomLeftRadius: 4,
                        // borderBottomRightRadius: 4,
                        // display: "block",
                        width: "17%",
                    }}
                />
                <img
                    src={`${headshot}`}
                    //   srcSet={`${}`}
                    //   alt={title}
                    loading="lazy"
                    style={{
                        // borderBottomLeftRadius: 4,
                        // borderBottomRightRadius: 4,
                        // display: "block",
                        width: "20%",
                    }}
                />
                <Box>

                    <h3>Artist statment</h3>
                    <p>{artistPara} Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt non numquam fugiat eveniet rem animi enim alias reprehenderit! Alias, cumque nesciunt delectus quae pariatur nobis ad. Aspernatur, quidem dolores.</p>
                    <h3>Exhibit statment</h3>
                    <p>{exhibtionPara} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem reprehenderit enim doloribus, quidem expedita? Impedit, debitis odit ipsa, eveniet dolore laudantium repellat doloribus dignissimos perferendis, molestias tempore eligendi veritatis.</p>
                </Box>
            </Container>
            <SGridWCarousel />
            {/* <Video videoHeight={"100vh"}/> */}

        </>
    )

}

export default ArtistOfTheMonth