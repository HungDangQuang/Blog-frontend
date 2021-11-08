import React from "react";
import Login from "../src/Pages/Login";
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './components/authentication/Redux/_helpers';
import { alertActions } from './components/authentication/Redux/_actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <div >
                    <div>
                        {alert.message &&
                            <div key={alert.id} className={`alter ${alert.type}`}>{alert.message}</div>
                        }
                        <BrowserRouter history={history}>
                            <Routes>
                            <Route path="/" element={<Login/>} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        );
    }
    }

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
