import React from 'react';
import Container from '@mui/material/Box';
import SGridWCarousel from '../components/SGridWCarousel';
import { Box } from '@mui/joy';
import shot from "../content/images/head-0.png"

const ArtistOfTheMonth = ({ artistOfTheMonthData, backgroundColor  }) => {
        const {date,exhibition_statement,headshot, artist_statement,main_artwork,thumbnail,title} = artistOfTheMonthData
        const imgSrc = headshot.slice(3)
    return (
        <>
        {console.log(headshot, "headshot")}
            <h1 id="/artistofthemonth">Artist Of The Month: {title}</h1>
            <Container  sx={{ backgroundColor: { backgroundColor } }}>
                <h2>{title}</h2>
                <img
                    src={`${main_artwork}`}
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
                {console.log(`..${imgSrc}`)}
                <img
                    src={`..${imgSrc}`}
             
                    loading="lazy"
                    style={{ 
                        width: "20%",
                    }}
                />
                <Box>

                    <h3>Artist statment</h3>
                    <p>{artist_statement} Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt non numquam fugiat eveniet rem animi enim alias reprehenderit! Alias, cumque nesciunt delectus quae pariatur nobis ad. Aspernatur, quidem dolores.</p>
                    <h3>Exhibit statment</h3>
                    <p>{exhibition_statement} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem reprehenderit enim doloribus, quidem expedita? Impedit, debitis odit ipsa, eveniet dolore laudantium repellat doloribus dignissimos perferendis, molestias tempore eligendi veritatis.</p>
                </Box>
            </Container>
            <SGridWCarousel />
            {/* <Video videoHeight={"100vh"}/> */}

        </>
    )

}

export default ArtistOfTheMonth


// import React from 'react';

// const ArtistOfTheMonth = ({ artistOfTheMonthData }) => {
//   return (
//     <div>
//       <h1>Artist Of The Month: {artistOfTheMonthData.date}</h1>
//       <div>
//         <h2>{artistOfTheMonthData.artist_name}</h2>
//         <img src={artistOfTheMonthData.thumbnail} alt={artistOfTheMonthData.artist_name} />
//         <img src={artistOfTheMonthData.mainArtwork} alt={artistOfTheMonthData.artist_name} />
//         <div>
//           <h3>Artist statement</h3>
//           <p>{artistOfTheMonthData.artist_statement}</p>
//           <h3>Exhibit statement</h3>
//           <p>{artistOfTheMonthData.exhibition_statement}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistOfTheMonth;
