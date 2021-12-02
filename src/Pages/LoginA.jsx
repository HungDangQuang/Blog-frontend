import React from "react";
// material
import { styled } from "@mui/material/styles";
import { Card, Container, Typography, Avatar } from "@mui/material";
import adminIMG from "../assets/images/admin.jpg";
import logo from "../assets/images/logo.png";
// components
import LoginAdmin from "../containers/LoginAdmin";
// ----------------------------------------------------------------------

const TitleStyle = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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
  minHeight: "50vh",
  flexDirection: "column",
  border: "1px solid #ccc",
  borderRadius: 5,
  backgroundColor: "white",
  justifyContent: "center",
  padding: theme.spacing(0, 4, 3, 4),
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  minHeight: 369,
  borderRadius: 10,
}));

// ----------------------------------------------------------------------

const LoginA = () => {
  return (
    <>
      <SectionStyle
        style={{
          width: "100%",
          backgroundImage: `url(${adminIMG})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContainerStyled maxWidth="xs">
          <ContentStyle>
            <TitleStyle variant="h4" align="center" gutterBottom sx={{ mb: 1 }}>
              <Avatar src={logo} sx={{ width: 60, height: 60 }}></Avatar>
              <h3>Admin</h3>
            </TitleStyle>
            <LoginAdmin />
          </ContentStyle>
        </ContainerStyled>
      </SectionStyle>
    </>
  );
};

export default LoginA;
