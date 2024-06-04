import React from "react";
import { checkUser } from "../database/users";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputPassword: '',
            message: '',
            user: null,
        };
    }

    buildNotLoggedInPage() {
        return (
            <>
                <h3 className="text-center font-bold">Please login first!</h3>
                <form onSubmit={(event) => {
                            event.preventDefault();

                            const user = checkUser(this.state.inputPassword);

                            if (user) {
                                this.setState({ 
                                    message: 'Login successful!',
                                    isLoggedIn: true,
                                    user: user,
                                });
                            } else {
                                this.setState({ message: 'Wrong password!' });
                            }
                        }}>
                    <label>Password:</label>
                    <input
                        required
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full mt-2"
                        value={this.state.inputPassword}
                        onChange={(event) => {
                            this.setState({ inputPassword: event.target.value });
                        }}
                    />
                    {this.state.message && (
                        <p className="text-red-400 mt-2">{this.state.message}</p>
                    )}
                    <button
                        className="btn btn-primary mt-2 w-full"
                        type="submit"
                    >Login</button>
                </form>
            </>
        );
    };

    buildLoggedInPage() {
        return (
            <>
                <h3>Welcome, {this.state.user.name}!
                <br />
                <a
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => {
                        this.setState({ user: null });
                    }}
                >Logout</a></h3>
            </>
        );
    
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        {this.state.user 
                            ? this.buildLoggedInPage() 
                            : this.buildNotLoggedInPage()
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Body;