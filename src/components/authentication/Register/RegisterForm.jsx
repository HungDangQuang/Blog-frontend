import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../../../Redux/_actions';

import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
    Stack,
    TextField,
    IconButton,
    InputAdornment,
    FormGroup,
    Button

} from '@mui/material';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            email: '',
            password: '',
            submitted: false,
            isShowPwd: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlePassword = this.handlePassword.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handlePassword() {
        this.setState(prevState => ({isShowPwd: !prevState.isShowPwd}))
    }
    
    
    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.username && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const isShowPwd = this.state.isShowPwd;
        return(
                <FormGroup autoComplete="off" noValidate>
                    <Stack spacing={3} sx={{mb: 4}}>
                    <TextField
                        fullWidth
                        required
                        autoComplete="username"
                        type="username"
                        label="Username"
                        name="username"
                        autoFocus
                        onChange={this.handleChange}
                    />

                    <TextField
                        fullWidth
                        required
                        autoComplete="email"
                        type="email"
                        label="Email"
                        name="email"
                        onChange={this.handleChange}
                    />

                    <TextField
                        fullWidth
                        required
                        label="Password"
                        name="password"
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

                    <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"

                    sx={{
                        borderRadius: 5
                    }}   
                    onClick={this.handleSubmit}
                    >
                        Login
                    </Button>
                </FormGroup >
        );
    }
}


function mapStateToProps(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedLoginForm = connect(mapStateToProps, actionCreators)(RegisterForm);
export { connectedLoginForm as RegisterForm };