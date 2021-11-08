import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../Redux/_actions';

import { Link as RouterLink } from 'react-router-dom';

import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
    Link,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel,
    FormGroup,
    Button

} from '@mui/material';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            isShowPwd: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlePassword = this.handlePassword.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handlePassword() {
        this.setState(prevState => ({isShowPwd: !prevState.isShowPwd}))
    }
    
    handleSubmit(e) {

        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email,password);
        }
    }

    render() {
        const { loggingIn } = this.state;
        const isShowPwd = this.state.isShowPwd;
        return(
                <FormGroup autoComplete="off" noValidate>
                    <Stack spacing={3}>
                    <TextField
                        fullWidth
                        required
                        autoComplete="email"
                        type="email"
                        label="Email"
                        name="email"
                        value={this.state.email}
                        autoFocus
                        onChange={this.handleChange}
                    />

                    <TextField
                        fullWidth
                        required
                        label="Password"
                        name="password"
                        value={this.state.password}
                        autoComplete="current-password"
                        onChange={this.handleChange}

                        type={isShowPwd ? 'text' : 'password'}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={this.handlePassword} edge="end">
                                <Icon icon={isShowPwd ? eyeFill : eyeOffFill} />
                                </IconButton>
                            </InputAdornment>
                        )
                        }}
                    />
                    </Stack>

                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                        <FormControlLabel
                        control={<Checkbox/>}
                        label="Remember me"
                        />

                        <Link component={RouterLink} variant="subtitle2" to="#">
                        Forgot password?
                        </Link>
                    </Stack>

                    <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"

                    sx={{
                        borderRadius: 5
                    }}   
                    onClick={this.handleSubmit}
                    onLoad={loggingIn}
                    >
                        Login
                    </Button>
                </FormGroup >
        );
    }
}


function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginForm = connect(mapStateToProps, actionCreators)(LoginForm);
export { connectedLoginForm as LoginForm };

