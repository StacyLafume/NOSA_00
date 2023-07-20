import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';

const VideoLanding = () => {
  const materialTheme = materialExtendTheme();

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
      <Box sx={{ display: "flex", flexWrap: "wrap", p: 0, m: 0, height: 900}}>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            // poster={}
            
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/020/286/262/mp4/professional-female-artist-girl-use-paintbrush-in-abstract-art-for-create-masterpiece-painter-paint-with-watercolors-or-oil-in-studio-house-beautiful-woman-enjoy-painting-as-hobby-work-recreation-free-video.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          
        </CardContent>
      </Card>
    </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
    

  );
};

export default VideoLanding;


// <Box sx={{ display: "flex", flexWrap: "wrap", p: 0, m: 0 }}>
//       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
//         <CardCover>
//           <video
//             autoPlay
//             loop
//             muted
//             poster="https://assets.codepen.io/6093409/river.jpg"
//           >
//             <source
//               src="https://assets.codepen.io/6093409/river.mp4"
//               type="video/mp4"
//             />
//           </video>
//         </CardCover>
//         <CardContent>
//           <Typography
//             level="h6"
//             fontWeight="lg"
//             textColor="#fff"
//             mt={{ xs: 12, sm: 18 }}
//           >
//             Video
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>