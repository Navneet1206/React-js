import React from 'react';
import { Link } from 'react-router-dom';
const SignIn = () => {
    return (
        <div className="auth-page">
            <h1>Sign In</h1>
            {/* Sign In form goes here */}
            
            <p>register<Link to="/signup">SignUp</Link></p>
        </div>
    );
};

export default SignIn;