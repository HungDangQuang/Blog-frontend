import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';

// components
import { HandleLogin } from '../containers/HandleLogin'





// ----------------------------------------------------------------------

const TitleStyle = styled(Typography)(({ theme }) => ({
    fontFamily: [
        'Chilanka',
        'cursive',
    ].join(',')
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(0, 0, 0, 0)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 330,
    margin: 'auto',
    display: 'flex',
    minHeight: '70vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 0)
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
    minHeight: 369,
    borderRadius: 10,
}));

// ----------------------------------------------------------------------

const Login = () => {
    return (
        <>
        <SectionStyle>
        <ContainerStyled maxWidth="xs">
                {/* {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                } */}
            <ContentStyle>
                <TitleStyle variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
                Search Blog
                </TitleStyle>
                <HandleLogin />

                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="/register">
                    Sign Up
                </Link>
                </Typography>
            </ContentStyle>
        </ContainerStyled>
        </SectionStyle>
        </>
    )
};

export default Login;
