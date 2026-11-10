import * as React from "react";
import { useState } from "react";
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
import useMediaQuery from "@mui/material/useMediaQuery";

const Video = ({
  videoHeight,
  videoSources = [],
  videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-abstract-red-fabric-flowing-282-large.mp4",
}) => {
  const materialTheme = materialExtendTheme();
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  const sources = videoSources.length > 0 ? videoSources : [videoSrc];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((index) => (index + 1) % sources.length);
  };

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <Box
          component="section"
          id="/"
          aria-labelledby="home-title"
          sx={{
            position: "relative",
            display: "grid",
            placeItems: "center",
            p: 0,
            m: 0,
            height: videoHeight,
            borderRadius: 0,
            overflow: "hidden",
          }}
        >
          <Card
            component="div"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              minWidth: 0,
              borderRadius: 0,
            }}
          >
            <CardCover sx={{ borderRadius: 0 }}>
              <video
                key={currentVideoIndex}
                autoPlay={!prefersReducedMotion}
                loop={!prefersReducedMotion && sources.length === 1}
                muted
                playsInline
                aria-hidden="true"
                onEnded={sources.length > 1 ? handleVideoEnded : undefined}
                style={{
                  borderRadius: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source src={sources[currentVideoIndex]} type="video/mp4" />
              </video>
            </CardCover>
            <CardContent></CardContent>
          </Card>
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "fit-content",
              maxWidth: "min(90%, 48rem)",
              px: { xs: 2.5, sm: 4, md: 6 },
              py: { xs: 2, sm: 3, md: 4 },
              border: "2px solid #fff",
              backgroundColor: "#161616",
              color: "#fff",
              textAlign: "center",
              boxShadow: "0 8px 32px rgb(0 0 0 / 45%)",
            }}
          >
            <h1
              id="home-title"
              style={{
                color: "inherit",
                fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
                lineHeight: 1.15,
              }}
            >
              Nubian Open Studios for the Arts
            </h1>
          </Box>
        </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
};

export default Video;
