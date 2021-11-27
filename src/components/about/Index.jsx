import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  background: {
    width: "100%",
    height: "100vh",
    backgroundPosition: "left 0px bottom 0px",
    backgroundSize: "cover",
  },
  wrapper: {
    display: "flex",
    padding: 20,
  },
  text: {
    color: "#878787",
  },
  imgage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 470,
    height: 635,
  },
  conentAbout: {
    width: 440,
    height: 605,
    background: "white",
  },

  imgLeft: {
    width: 356,
    height: 356,
    borderRadius: "50%",
    background:
      "url(https://images.unsplash.com/photo-1637863685875-bbdf41639d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60)",
    boxShadow: "10px 7px 21px 0 rgb(0 0 0 / 40%)",
  },
  wrapContent: {
    margin: "40px 0px",

    padding: 30,
  },
  titleBody: {
    marginTop: 20,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.background}>
      <Box className={classes.wrapper}>
        <Box className={classes.imgage}>
          <Box className={classes.imgLeft}></Box>
        </Box>
        <Box className={classes.conentAbout}>
          <Box className={classes.wrapContent}>
            <Box className={classes.titleTop}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 1000,
                  borderBottom: "1px solid #ccc",
                }}
              >
                ABOUT US
              </Typography>
            </Box>
            <Box className={classes.titleBody}>
              <Typography
                style={{ fontFamily: "Open Sans", fontWeight: 1000 }}
                variant="h4"
              >
                We create blogs to create meaningful, memorable and iconic
                benefits.
              </Typography>
              <Typography style={{ fontFamily: "Open Sans" }} variant="h6">
                We always create great blogs for you. You can contact us through
                the social media page below.
              </Typography>

              <Box className="socialBar">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <ion-icon name="logo-facebook"> </ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <ion-icon name="logo-pinterest"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
