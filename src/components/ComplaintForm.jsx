import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router kullanıyorsanız

function ComplaintForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  // React Router kullanıyorsanız

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form gönderildi!");
    navigate('/');
    // Formun gönderildiğini işaretleyelim
    setIsSubmitted(true);
    // İşlem tamamlandıktan sonra yönlendirme yapabiliriz
    // Örnek olarak 2 saniye sonra ana sayfaya yönlendirme yapalım
    setTimeout(() => {
      // history.push('/') şeklinde kullanabilirsiniz, eğer React Router kullanıyorsanız
      // Burada '/' ana sayfa için bir örnek, kendi proje yapısınıza göre ayarlayabilirsiniz
      history.push('/');
    }, 2000);
  };

  return (
    <div className="form-container">
      <h2>Öneri veya Şikayet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            <i className="bi bi-clipboard2-heart"></i> | Konu
          </label>
          <input type="text" className="form-control" id="subject" name="subject" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            <i className="bi bi-chat-heart"></i> | Mesaj
          </label>
          <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-heart"></i> | Gönder
        </button>
      
        {/* Kullanıcı formu başarıyla gönderdiğinde gösterilecek mesaj */}
        {isSubmitted && <p>Form başarıyla gönderildi. Yönlendiriliyorsunuz...</p>}
      </form>
    </div>
  );
}

export default ComplaintForm;
