import React from 'react';

function LoginButton() {
  
  // Butona tıklandığında gerçekleştirilecek işlev
  const handleClick = () => {
   
    // Buraya tıklama olayı gerçekleştirildiğinde yapılacak işlemleri ekleyebilirsiniz
    console.log('Giriş yap butonuna tıklandı!');
  };
  
  return (
    <button className="login-button" onClick={handleClick}>Giriş Yap</button>
  );
}

export default LoginButton;

