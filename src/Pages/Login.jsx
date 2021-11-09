import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';

// components
import { LoginForm } from '../components/authentication/Login/LoginForm';
import { connect } from 'react-redux';
import { alertActions } from '../Redux/_actions';
import { history } from '../Redux/_helpers';



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
    maxWidth: 350,
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

class Login extends React.Component {
    constructor(props){
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });

    }

    render() {
        const { alert } = this.props;
        return (
            <>
            <SectionStyle>
            <ContainerStyled maxWidth="xs">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                <ContentStyle>
                <Stack sx={{ mb: 3 }}>
                    <TitleStyle variant="h4" align="center" gutterBottom>
                    Search Blog
                    </TitleStyle>
                </Stack>
    
                <LoginForm />
    
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
        );
    }
}


function mapStateToProps(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapStateToProps, actionCreators)(Login);
export { connectedApp as Login };