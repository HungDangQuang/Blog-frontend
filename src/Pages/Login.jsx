import React from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography } from "@mui/material";
import background from "../assets/images/bg.jpg";
// components
import HandleLogin from "../containers/HandleLogin";
// ----------------------------------------------------------------------

const TitleStyle = styled(Typography)(({ theme }) => ({
  fontFamily: ["Chilanka", "cursive"].join(","),
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(0, 0, 0, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  minwidth: 310,
  margin: "auto",
  display: "flex",
  minHeight: "62vh",
  flexDirection: "column",
  border: "1px solid #ccc",
  backgroundColor: "white",
  borderRadius: 5,
  justifyContent: "center",
  padding: theme.spacing(0, 4),
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  minHeight: 369,
  borderRadius: 10,
}));

// ----------------------------------------------------------------------

const Login = () => {
  return (
    <SectionStyle
      style={{
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <ContainerStyled maxWidth="xs">
        <ContentStyle>
          <TitleStyle variant="h4" align="center" gutterBottom sx={{ mb: 2 }}>
            Youbo
          </TitleStyle>
          <HandleLogin />

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don’t have an account?&nbsp;
            <Link variant="subtitle2" component={RouterLink} to="/register">
              Sign Up
            </Link>
          </Typography>
        </ContentStyle>
      </ContainerStyled>
    </SectionStyle>
  );
};

export default Login;
