import './register.css';
// import meeting from '../img/meeting.jpg';
import {useNavigate} from 'react-router-dom'
import { useCallback } from 'react';


const Registration = () => {

    const navigate = useNavigate();

    const goToLogin = useCallback(() =>{
        navigate ('/login');
    },[navigate]
);


    return ( 
        <div className="register-form">
            <div className="create-account-card">
                {/* <img src={meeting} alt="backroung image" /> */}

                <div className="register-content">
                    <div className="register-content-title">Create An Account</div>
                </div>


            </div>
            
            <div className="register-card">

                {/* div card for names and email */}
                
                <div className="email-names">
                    <div className="names">
                        <div className="span-text">Name</div>
                        <div className="input-info">
                            <input type="text" placeholder='Name'/>
                        </div>
                    </div>

                    <div className="names">
                        <div className="span-text">Email</div>
                        <div className="input-info">
                            <input type="text" placeholder='Email'/>
                        </div>
                    </div>
                </div>

                {/* Div card for password and phone number */}
                <div className="email-names">
                    <div className="passwords-number">
                        <div className="span-text">Passowrd</div>
                        <div className="input-information">
                            <input type="password" placeholder='********'/>
                        </div>
                    </div>

                    <div className="passwords-number">
                        <div className="span-text">Confirm Password</div>
                        <div className="input-information">
                            <input type="password" placeholder='********'/>
                        </div>
                    </div>

                    <div className="passwords-number">
                        <div className="span-text">Phone</div>
                        <div className="input-information">
                            <input type="text" placeholder='Phone Number'/>
                        </div>
                    </div>
                </div>

                {/* Div for SIGN UP Button */}
                <div className="sign-up">                  
                        <div className="submit-info">
                            <input type="button" value="SIGN UP"/>
                        </div>
                </div>

                {/* Login form if you have an account */}
                <div className="login-card">
                    <div className="have-account">Already have an account?</div>
                    <div className="login-way" onClick={goToLogin}>Login</div>
                </div>
            </div>

        </div>
     );
}
 
export default Registration;