import React, { useState } from 'react';
import '../assets/css/login.css';

const LoginForm = () => {

  function ShowPS(){
    var x=document.getElementById("password");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password ) {
      setError('Please fill in all fields and make sure passwords match.');
      return;
    }
    
  };

  return (
    <div className="container1">
    <div className="container">
      <form onSubmit={handleSubmit}>
          <center><h2 className="textt" id="head-login">Login</h2></center>
          <div className="email login-form" >
            <label id="l-email" className="textt">Email:</label><br></br>
            <input className="textt" id="email" type="email" name="email" value={formData.email} onChange= {handleChange} />
          </div>
          <div className="password login-form" >
            <label id="l-password" className="textt">Password:</label><br></br>
            <input className="textt" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="show-chck" id='show'><input type="checkbox"  className="checkb"onClick={ShowPS}/><p id='show-text' className='textt'>Show Password</p></div>
          {error && <p className='textt' id='error' style={{ color: 'rgb(290, 0, 0)' }}>{error}</p>}
        <center><button className="textt login-form"  id="submit" type="submit">Login</button></center>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
