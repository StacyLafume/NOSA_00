import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const FilterGrid = () => {
    const itemData = [
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
    const [filteredData, setFilteredData] = useState(itemData);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredData = itemData.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) //||
            // item.date.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };



    return (
        <Container maxWidth="xl">
            <FormControl fullwidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </FormControl>
            <Grid container spacing={7}>
                {filteredData.map((x) => (
                    <Grid item xs={3}>
                        <MediaCard itemData={x} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FilterGrid;