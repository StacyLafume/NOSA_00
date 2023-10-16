import React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import CardActions from "@mui/joy/CardActions";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import Video from "./Video";

const materialTheme = materialExtendTheme();

const ServiceCard = ({ service }) => {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <Card
          borderRadius="0"
          size="lg"
          variant="plain"
          orientation="horizontal"
          sx={{
            textAlign: "left",
            borderRadius: 0,
          }}
        >
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
            gap={2}
          >
            <CardOverflow
              sx={{
                flex: "1",
                borderRadius: 0,
                backgroundImage: `url("${service.video}")`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
            ></CardOverflow>
            <CardContent
              sx={{
                flex: "1",
                gap: 1.5,
                minWidth: 200,
                justifyContent: "space-around",
                fontFamily: "blinker",
              }}
            >
              {/* Your pricing card content */}
              <Card size="lg" variant="outlined">
                <Typography level="h2" fontSize="xl3" fontFamily="Blinker">
                  {service.title}
                </Typography>
                <Divider inset="none" />
                <List
                  size="sm"
                  sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                >
                  {service.description.map((point, index, array) => (
                    <ListItem >
                      <ListItemDecorator style={{minWidth: '15rem !important'}} >
                        <Check style={{ margin: "9px" }} />
                        <br />
                        {point}
                      </ListItemDecorator>
                    </ListItem>
                  ))}
                </List>
                <Divider inset="none" />
                <CardActions>
                  <Typography
                    fontFamily="Blinker"
                    level="h5"
                    sx={{ mr: "auto" }}
                  ></Typography>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfBQp_bVNShz0Rhm9_wGe3pqPS8xzFsR1Fb_SkSY6rguW3ivg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Button
                    variant="soft"
                    color="neutral"
                    endDecorator={<KeyboardArrowRight />}
                  >
                    Book now
                  </Button>
                  </a>
                </CardActions>
              </Card>
            </CardContent>
          </Box>
        </Card>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
};

export default ServiceCard;
