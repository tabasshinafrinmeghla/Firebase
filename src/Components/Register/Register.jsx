import React from 'react';


const Register = () => {
  return (
    <div>
      <h4>Register</h4>
      <form>
      </form>
      <input type="email" name="email" id='email' placeholder='Your Email' />
      <br />
      <input type="password" name="password" id="password" placeholder='Your password' />
      <br />
      <input type="submit" value="Register" />
    </div>
  );
};

export default Register;