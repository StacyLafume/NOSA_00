import React from 'react';
import Container from '@mui/material/Box';
import SGridWCarousel from '../components/SGridWCarousel';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { Box } from '@mui/joy';
import headshot from '../content/images/headshots/headshot.jpg';
import Masonry from "@mui/lab/Masonry";

import '../monthlyArtist.css';

const ArtistOfTheMonth = ({ name, artistStatement, exhibition }) => {
    return (
        <>
            <div style={{ marginTop: '10vh', height: '95vh' }} className="container container-inside  group">
                <div className="top-matter">
                    <div className="title">
                        <h1 style={{ width: '32vw' }}>
                            Artist of the Month <span>{name}</span>
                        </h1>
                    </div>
                    <div className="intro">
                        <p>
                            July 2023: IN MY SKIN
                        </p>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div class="article-container">
                <div>
                    <h2>About the Artist</h2>
                    <p>
                        Kris, Born 1994, Boston based photographer since 2015. Pronouns She/Her/Hers. Kris has her
                        bachelor’s in Psychology from Lesley University. Along with pursuing her career as a
                        photographer, Kris hopes to eventually develop her own practice in art therapy. Her biggest
                        muse behind her work are black people, especially black femmes. She strives to show the
                        versatility of the black community by capturing their personalities, culture, stories, &
                        experiences.</p>
                </div>

                <img src="https://github.com/StacyLafume/NOSA_00/assets/102001997/b66ce5b4-d056-42c6-8592-f2a58fe3e981"/>


             


            </div>
        </>
    );
};

export default ArtistOfTheMonth




