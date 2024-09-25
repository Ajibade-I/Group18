import './register.css';
// import meeting from '../img/meeting.jpg';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registration = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: ''  // Default to jobSeeker
    });

    const navigate = useNavigate();

    const goToLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission for signup
    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:7500/api/v1/users/signup', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role: formData.role,
                    phone: formData.phone
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Signup successful');
                navigate('/login');
            } else {
                alert(result.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="register-form">
            <div className="create-account-card">
                <div className="register-content">
                    <div className="register-content-title">Create An Account</div>
                </div>
            </div>
            <div className="register-card">
                <div className="email-names">
                    <div className="names">
                        <div className="span-text">Name</div>
                        <div className="input-info">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='Name' 
                                value={formData.name}
                                onChange={handleChange} 
                                required/>
                        </div>
                    </div>
                    <div className="names">
                        <div className="span-text">Email</div>
                        <div className="input-info">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder='Email' 
                                value={formData.email}
                                onChange={handleChange} 
                                required/>
                        </div>
                    </div>
                </div>
                <div className="email-names">
                    <div className="passwords-number">
                        <div className="span-text">Password</div>
                        <div className="input-information">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder='********' 
                                value={formData.password}
                                onChange={handleChange} 
                                required/>
                        </div>
                    </div>
                    <div className="passwords-number">
                        <div className="span-text">Confirm Password</div>
                        <div className="input-information">
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                placeholder='********' 
                                value={formData.confirmPassword}
                                onChange={handleChange} 
                                required/>
                        </div>
                    </div>
                    <div className="passwords-number">
                        <div className="span-text">Phone</div>
                        <div className="input-information">
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder='Phone Number' 
                                value={formData.phone}
                                onChange={handleChange} 
                                required/>
                        </div>
                    </div>
                </div>

                {/* Role Selection */}
                <div className="email-names">
                    <div className="names">
                        <div className="span-text">Role</div>
                        <div className="input-info">
                            <select name="role" value={formData.role} onChange={handleChange}  required>
                                <option value="" disabled selected>Choose Role</option>
                                <option value="jobSeeker">Job Seeker</option>
                                <option value="jobProvider">Job Provider</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="sign-up">
                    <div className="submit-info">
                        <input 
                            type="button" 
                            value="SIGN UP" 
                            onClick={handleSignup} 
                         required/>
                    </div>
                </div>

                <div className="login-card">
                    <div className="have-account">Already have an account?</div>
                    <div className="login-way" onClick={goToLogin}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default Registration;