// components
import HandleRegister from "../containers/HandleRegister";

import React from "react";
// material
import { styled } from "@mui/material/styles";
import { Card, Container, Typography } from "@mui/material";
import background from "../assets/images/bg.jpg";
// components
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
  minwidth: 330,
  margin: "auto",
  display: "flex",
  minHeight: "70vh",
  flexDirection: "column",
  border: "1px solid #ccc",
  backgroundColor: "white",
  borderRadius: 10,
  justifyContent: "center",
  padding: theme.spacing(0, 5),
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  minHeight: 369,
  borderRadius: 10,
}));

// ----------------------------------------------------------------------

const Register = () => {
  return (
    <>
      <SectionStyle
        style={{
          width: "100%",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContainerStyled maxWidth="xs">
          <ContentStyle>
            <TitleStyle variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
              Youbo
            </TitleStyle>
            <HandleRegister />
          </ContentStyle>
        </ContainerStyled>
      </SectionStyle>
    </>
  );
};

export default Register;
