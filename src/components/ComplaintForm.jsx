import React from 'react';

function ComplaintForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form gönderildi!");
  };

  return (
    <div className="form-container">
      <h2>Öneri veya Şikayet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
          <i class="bi bi-clipboard2-heart"></i> | Konu</label>
          <input type="text" className="form-control" id="subject" name="subject" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
          <i class="bi bi-chat-heart"></i> | Mesaj</label>
          <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary">
        <i class="bi bi-heart"></i> | Gönder</button>
        
      </form>
    </div>
  );
}

export default ComplaintForm;