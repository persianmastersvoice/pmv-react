import React, { useState } from 'react';
import './LoginPage.css';



function LoginPage(props){
 


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Here you can validate the user's input and authenticate them
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    // Calculate password strength
    const passwordStrengthScore = calculatePasswordStrength(event.target.value);
    setPasswordStrength(getPasswordStrengthLabel(passwordStrengthScore));
  }

  const calculatePasswordStrength = (password) => {
    // Password strength calculation logic here
    return 0;
  }

  const getPasswordStrengthLabel = (score) => {
    // Password strength label mapping logic here
    return '';
  }

  return (
    <form onSubmit={handleLogin} className="login-form" style={{ fontFamily: "Drugs, sans-serif",marginTop: "300px" }}>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <div className="password-input-container">
          <input 
            type={showPassword ? "text" : "password"} 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className={`password-strength ${passwordStrength}`}>
          {passwordStrength}
        </div>
      </label>
      <button type="submit"style={{marginLeft: "340px",marginBottom: "320px" }}>Login</button>
    </form>
    
  );



 



}

export default LoginPage;
