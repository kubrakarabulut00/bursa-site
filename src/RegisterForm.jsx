import React, { useState, useEffect } from 'react';
import './RegisterForm.css';

function RegisterForm({ onRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [registeredUser, setRegisteredUser] = useState('');
  const [nearestTownHall, setNearestTownHall] = useState(null);

  const jsonURL = './data/muhtarliklar.json'; // Örneğin, JSON dosyası src/data klasöründe olsun


  useEffect(() => {
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
        console.log(data); // JSON verilerini kontrol etmek için konsola yazdır
      })
      .catch(error => {
        console.error('API hatası:', error);
      });
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration(username);
    setRegisteredUser(username);
    findNearestTownHall(address);
  };
  const findNearestTownHall = (address) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        
        let closestTownHall = null;
        let closestDistance = Infinity;
  
        muhtarliklar.forEach(muhtarlik => {
          const distance = calculateDistance(userLocation, muhtarlik);
          if (distance < closestDistance) {
            closestTownHall = muhtarlik;
            closestDistance = distance;
          }
        });
  
        setNearestTownHall(closestTownHall);
      },
      error => {
        console.error('Konum hatası:', error);
      }
    );
  };
  

  return (
    <div className="register-form">
      <h3>Giriş Yap</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><i className="bi bi-person"></i> | Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><i className="bi bi-key"></i> | Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><i className="bi bi-house-door"></i> | Adres:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit"><i className="bi bi-fingerprint"></i> | Giriş Yap</button>
      </form>
      
      {registeredUser && (
        <div>
          <h4>Giriş Yaptınız!</h4>
          <p>Kullanıcı Adı: {registeredUser}</p>
        </div>
      )}
      
      {nearestTownHall && (
        <div>
          <h4>En Yakın Muhtarlık:</h4>
          <p>Adı: {nearestTownHall.name}</p>
          <p>Adres: {nearestTownHall.address}</p>
          {/* Muhtarlık verilerini göstermek için gerekli diğer bilgileri buraya ekleyebilirsiniz */}
        </div>
      )}
    </div>
  );
}

export default RegisterForm;





