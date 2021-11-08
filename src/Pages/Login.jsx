import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';

// components
import { LoginForm } from '../components/authentication/Login/LoginForm';



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
    backgroundImage: 'url(https://images.unsplash.com/photo-1635519335547-3caa661c8c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60)',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(0, 0, 0, 0)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 350,
    margin: 'auto',
    display: 'flex',
    minHeight: '70vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 0)
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
    backgroundColor: 'white',
    minHeight: 369,
    position: 'relative',
    borderRadius: 10,
}));

// ----------------------------------------------------------------------

export default function Login() {
    return (
        <>
        <SectionStyle>
        <ContainerStyled maxWidth="xs">
            <ContentStyle>
                
            <Stack sx={{ mb: 3 }}>
                <TitleStyle variant="h4" align="center" gutterBottom>
                Search Blog
                </TitleStyle>
            </Stack>

            <LoginForm />

                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="register">
                    Sign Up
                </Link>
                </Typography>
            </ContentStyle>
        </ContainerStyled>
        </SectionStyle>
        </>
    );
}
