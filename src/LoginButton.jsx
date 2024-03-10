import React from 'react';

function LoginButton() {
  
  
  const handleClick = () => {
   
   
    console.log('Giriş yap butonuna tıklandı!');
  };
  
  return (
    <button className="login-button" onClick={handleClick}>Giriş Yap</button>
  );
}

export default LoginButton;

