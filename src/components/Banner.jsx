import React from 'react'
import Marquee from "react-fast-marquee";


const Banner = ({bannerText}) => {
    const text =  bannerText[0].banner_text
    // console.log(bannerText[0].banner_text, 'text')
    return (
        <Marquee style={{ gradient: true, minHeight: "3.5rem", backgroundColor: 'black'}} speed={75} pauseOnHover={true} pauseOnClick={true} autoFill={true}>
        <div style={{ width: 'auto', color: "white", flexShrink: 0 }}>
            <p style={{ margin: 0, padding: "0 clamp(2rem, 6vw, 6rem)", whiteSpace: "nowrap" }}>
               {"  ✨ Showcasing local artists near you ✨  "}
            </p>
           
        </div>
    
    </Marquee>
    )
}

export default Banner