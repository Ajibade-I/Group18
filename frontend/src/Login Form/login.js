import './login.css'

const LoginForm = () => {
    return ( 
        <div className="login-page">

                <div className="login-cards">

                    <div className="job-info">
                        <div className="job-seeker">Job Seeker</div>
                        <div className="job-provider">Job Provider</div>
                    </div>

                {/* div card for names and email */}

                <div className="logins-info">
                    <div className="emails">
                        <div className="span-text">Email</div>
                        <div className="login-input-info">
                            <input type="text" placeholder='Email'/>
                        </div>
                    </div>

                    <div className="emails">
                        <div className="span-text">Password</div>
                        <div className="login-input-info">
                            <input type="password" placeholder='Password'/>
                        </div>
                    </div>
                </div>

                {/* Forgetting Password */}
                <div className="forgot-card">
                    <div className="forgot-password">Forgot Password?</div>
                </div>


                {/* Div for LOGIN  Button */}
                <div className="login-part">                  
                        <div className="submit-login-info">
                            <input type="button" value="LOGIN"/>
                        </div>
                </div>




                </div>


        </div>
     );
}
 
export default LoginForm;