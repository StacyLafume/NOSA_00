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
            textAlign: "center",
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
              }}
            >
              {/* <Typography fontSize="xl5" fontWeight="xl" textColor="#fff">
                {service}
              </Typography> */}
              <Video videoHeight={500} videoSrc={service.video} />
            </CardOverflow>
            <CardContent
              sx={{
                flex: "1",
                gap: 1.5,
                minWidth: 200,
                justifyContent: "space-around",
              }}
            >
              {/* Your pricing card content */}
              <Card size="lg" variant="outlined">
                <Typography level="h2" fontSize="xl3">
                  {service.title}
                </Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
                  <ListItem>
                    <ListItemDecorator>
                      <Check />
                    </ListItemDecorator>
                    Virtual Credit Cards
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <Check />
                    </ListItemDecorator>
                    Financial Analytics
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <Check />
                    </ListItemDecorator>
                    Checking Account
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <Check />
                    </ListItemDecorator>
                    API Integration
                  </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                  <Typography level="h5" sx={{ mr: "auto" }}>
                    {service.price}{" "}
                  </Typography>
                  <Button
                    variant="soft"
                    color="neutral"
                    endDecorator={<KeyboardArrowRight />}
                  >
                    Book now
                  </Button>
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
