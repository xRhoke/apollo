import React, {Component} from 'react';
import {Cookies, withCookies} from 'react-cookie';
import axios from "axios";

interface IProps {
    cookies: Cookies
}

interface IState {
    isLoading: boolean,
    isAuthenticated: boolean,
    user?: IUser,
    csrfToken?: string
}

interface IUser {
    acr: string,
    at_hash: string,
    aud: string[],
    c_hash: string,
    email: string,
    email_verified: boolean
    exp: string,
    iat: string,
    iss: string,
    jti: string,
    nbf: string,
    nonce: string,
    sub: string
}

class Home extends Component<IProps, IState> {
    state: IState = {
        isLoading: true,
        isAuthenticated: false,
        user: undefined,
    }

    constructor(props: IProps) {
        super(props);
        const {cookies} = props;
        this.state.csrfToken = cookies.get('XSRF-TOKEN');
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
        const body = await axios.get('/api/user', { withCredentials: true }).then(({data}) => data);
        if (body === '') {
            this.setState({isAuthenticated: false});
        } else {
            this.setState({isAuthenticated: true, user: body});
        }
    }

    login() {
        // There has to be a better way to get this working, but currently manually redirecting to 8080 for login to work
        let port = (window.location.port ? ':' + window.location.port : '');
        if (port === ':3000') {
            port = ':8080';
        }
        window.location.href = '//' + window.location.hostname + port + '/oauth2/authorization/logingov';
    }

    logout() {
        axios.post('/logout', null,{
            withCredentials: true,
            headers: {'X-XSRF-TOKEN': this.state.csrfToken}
        });
    }

    render() {
        const welcome = this.state.user ? <p>Welcome, {this.state.user.email}!</p> : <p>Welcome! Please log in.</p>;
        const button = this.state.isAuthenticated ? <button onClick={this.logout}>Logout</button> : <button onClick={this.login}>Login</button>;
        return (
            <div>
                {welcome}
                <br/>
                {button}
                <br/>
                <button onClick={ping}>Ping the Backend (Authenticated)</button>
                <br/>
                <button onClick={pingTwo}>Ping the Backend (Public)</button>
            </div>
        )
    }
}

function ping() {
    axios.get("/api/user/test").then(result => console.log(result.data));
}

function pingTwo() {
    axios.get("/api/user/test2").then(result => console.log(result.data));
}

export default withCookies(Home);