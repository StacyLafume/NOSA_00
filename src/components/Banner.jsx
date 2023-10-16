import React from 'react'
import Marquee from "react-fast-marquee";
import BannerText from '../content/banner/bannerText.json'
import { Typography } from '@mui/material';

const Banner = ({bannerText}) => {
    return (
        <Marquee style={{ gradient: true, }}>
            <div style={{ backgroundColor: 'red' }}>
                <p>
                {bannerText.banner_Text}                
                </p>
            </div>
        </Marquee>

    )
}

export default Banner