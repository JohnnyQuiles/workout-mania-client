import React, { Component } from 'react';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
    state = {
        authToken: null,
        setAuthToken: authToken => this.setAuthToken(authToken)
    }
    setAuthToken = (authToken) => {
        this.setState({authToken: authToken }, function (){
            console.log("state:",this.state.authToken);
        });
    }
    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthProvider