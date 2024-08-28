import React, { useState } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        alumniName: '',
        passoutYear: '',
        email: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="auth-page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="alumniName">Alumni Name</label>
                    <input
                        type="text"
                        id="alumniName"
                        name="alumniName"
                        value={formData.alumniName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="passoutYear">Passout Year</label>
                    <input
                        type="number"
                        id="passoutYear"
                        name="passoutYear"
                        value={formData.passoutYear}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
    );
};

export default SignUp;
