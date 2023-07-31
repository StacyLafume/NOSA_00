import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ElevationScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

const Nav = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [scrollTriggered, setScrollTriggered] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleScroll = (e) => {
        const scrollTop = e.target.documentElement.scrollTop;
        if (scrollTop > 0) {
            setScrollTriggered(true);
        } else {
            setScrollTriggered(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll>
                <AppBar
                    sx={{
                        background: scrollTriggered ? '#D9D9D9' : 'transparent',
                        color: scrollTriggered ? '#000000' : '#FFFFFF',
                    }}
                >
                    <Toolbar>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Our Mission" {...a11yProps(0)} />
                            <Tab label="About Us" {...a11yProps(1)} />
                            <Tab label="Events" {...a11yProps(2)} />
                            <Tab label="Artist of the Month" {...a11yProps(2)} />
                            <Tab label="Past Exhibitions" {...a11yProps(2)} />
                            <Tab label="Services" {...a11yProps(2)} />
                            <Tab label="Contact Us" {...a11yProps(2)} />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChange}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Our Mission
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    About Us
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Events
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Artist of the Month
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Past Exhibitions
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Contact Us
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Services
                    </TabPanel>
                </TabPanel>
            </SwipeableViews>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Nav;