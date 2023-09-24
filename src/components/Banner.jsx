import React from 'react'
import Marquee from "react-fast-marquee";


const Banner = ({bannerText}) => {
    const text =  bannerText[0].banner_text
    console.log(bannerText[0].banner_text, 'text')
    return (
        <Marquee style={{ gradient: true, height: "6vh", backgroundColor: 'black'}}>
        <div style={{ width: '100vw', color: "white"}}>
            <p>
               {text}      
            </p>
        </div>
    </Marquee>
    )
}

export default Banner