import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

const PE = () => {

    const eventData = [
        {
            img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            title: "Breakfast",
        },
        {
            img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            title: "Burger",
        },
        {
            img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
            title: "Camera",
        },
        {
            img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
            title: "Coffee",
        },
        {
            img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
            title: "Hats",
        },
        {
            img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
            title: "Honey",
        },
        {
            img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
            title: "Basketball",
        },
        {
            img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
            title: "Fern",
        },
        {
            img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
            title: "Mushrooms",
        },
        {
            img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
            title: "Tomato basil",
        },
        {
            img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
            title: "Sea star",
        },
        {
            img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
            title: "Bike",
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(eventData);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredData = eventData.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) //||
            // item.date.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const ImageListItemWithStyle = styled(ImageListItem)(({ theme }) => ({
        "&:hover": {
            cursor: "pointer",
            opacity: 0.9,
            borderBottom: 'solid 4px orange',
            // borderLeft: `solid 1px orange`,
            // borderRight: `solid 4px orange`,
            boxShadow: `1px 10px 19px rgb(199 119 0)`,

        },
    }));

    return (
        <>
            <Divider textAlign="center" role="presentation" style={{ backgroundColor: 'orange', height: '.2rem', alignItems: 'center', margin: '2rem 0' }}>
                <h1 style={{ display: 'inline', backgroundColor: 'white' }}>Past Events</h1>
            </Divider>
            <Container sx={{ width: '80vw', marginTop: '10vh', }} maxWidth="xl">
                <FormControl fullWidth sx={{ m: 1, padding: '0 7rem', marginBottom: '5vh' }}>
                    <InputLabel sx={{ paddingLeft: '9.4rem' }} htmlFor="outlined-adornment-amount">Search</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </FormControl>
                <ImageList sx={{ width: "100%", height: 'auto' }} cols={5} rowHeight={'auto'} gap={50}>
                    {filteredData.map((item) => (
                        <ImageListItemWithStyle key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>by: {item.date}</span>}
                                position="below"
                                sx={{ borderBottom: 'solid 4px black' }}
                            />
                            {/* event name and date */}

                        </ImageListItemWithStyle>
                    ))}
                </ImageList>
            </Container>
        </>
    );
};

export default PE