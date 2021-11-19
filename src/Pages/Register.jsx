import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';

// components
import { HandleRegister } from '../containers/HandleRegister'




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
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 330,
    margin: 'auto',
    display: 'flex',
    minHeight: '70vh',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
    minHeight: 369,
    borderRadius: 10,
}));

// ----------------------------------------------------------------------

const Register = () => {
    return (
        <>
        <SectionStyle>
        <ContainerStyled maxWidth="xs">
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            <ContentStyle>
                <TitleStyle variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
                Search Blog
                </TitleStyle>
            
                <HandleRegister />

                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="/login">
                    Login
                </Link>
                </Typography>
            </ContentStyle>
        </ContainerStyled>
        </SectionStyle>
        </>
    );
}

export default Register;

