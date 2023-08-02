import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";

const Video = ({
  videoHeight,
  videoSrc = "https://www.shutterstock.com/shutterstock/videos/1059669308/preview/stock-footage-luxurious-pale-gold-glitter-moving-in-orange-and-black-background-feels-sophisticated-and-retro.webm",
}) => {
  const materialTheme = materialExtendTheme();

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 0,
            m: 0,
            height: videoHeight,
            borderRadius: 0,
          }}
        >
          <Card
            component="li"
            sx={{ minWidth: 300, flexGrow: 1, borderRadius: 0 }}
          >
            <CardCover sx={{ borderRadius: 0 }}>
              <video
                autoPlay
                loop
                muted
                style={{ borderRadius: 0, width: "100%", height: "100%" }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </CardCover>
            <CardContent></CardContent>
          </Card>
        </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
};

export default Video;
