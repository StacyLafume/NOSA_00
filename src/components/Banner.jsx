import React from 'react'
import Marquee from "react-fast-marquee";


const Banner = ({bannerText}) => {
    const text =  bannerText[0].banner_text
    console.log(bannerText[0].banner_text, 'text')
    return (
        <Marquee style={{ gradient: true, height: "6vh", backgroundColor: 'black'}} speed={100} pauseOnHover={true} pauseOnClick={true} autoFill={true}>
        <div style={{ width: 'auto', color: "white"}}>
            <p>
               {" ✨ 🎉 Complete Website coming soon 🎉 ✨ "}      
            </p>
           
        </div>
    
    </Marquee>
    )
}

export default Banner