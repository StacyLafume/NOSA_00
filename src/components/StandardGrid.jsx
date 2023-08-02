import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const StandardGrid = ({ itemData = [{ img: "", title: "" }] }) => {

    return (
        <Container maxWidth="xl">
            <ImageList sx={{ width: "100%", height: 'auto' }} cols={4} rowHeight={'auto'}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />

                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}

export default StandardGrid