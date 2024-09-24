import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './login.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle form submission for login
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:7500/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login successful');
                // Store the token if received from backend (in localStorage or context)
                localStorage.setItem('token', result.token);

                // Redirect to job list or another page after login
                navigate('/joblist');
            } else {
                alert(result.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return ( 
        <div className="login-page">
            <div className="login-cards">
                <div className="job-info">
                    <div className="job-seeker">
                        <NavLink to="/joblist">Job Seeker</NavLink>
                    </div>
                    <div className="job-provider">
                        <NavLink to="/joblist">Job Provider</NavLink>
                    </div>
                </div>

                {/* Email and Password Input Fields */}
                <div className="logins-info">
                    <div className="emails">
                        <div className="span-text">Email</div>
                        <div className="login-input-info">
                            <input 
                                type="text" 
                                placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="emails">
                        <div className="span-text">Password</div>
                        <div className="login-input-info">
                            <input 
                                type="password" 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>

                {/* Forgot Password */}
                <div className="forgot-card">
                    <div className="forgot-password">Forgot Password?</div>
                </div>

                {/* Login Button */}
                <div className="login-part">                  
                    <div className="submit-login-info">
                        <input 
                            type="button" 
                            value="LOGIN" 
                            onClick={handleLogin} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
