import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm({ onRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUser, setRegisteredUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onRegistration(username);
    
    setRegisteredUser(username);
  };

  return (
    <div className="register-form">
      <h3>Giriş Yap</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><i class="bi bi-person"></i> | Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><i class="bi bi-key"></i> | Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"><i class="bi bi-fingerprint"></i> | Giriş Yap</button>
      </form>
      
      {registeredUser && (
        <div>
          <h4>Giriş Yaptınız!</h4>
          <p>Kullanıcı Adı: {registeredUser}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;


